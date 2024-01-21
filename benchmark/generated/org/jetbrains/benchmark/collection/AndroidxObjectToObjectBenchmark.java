package org.jetbrains.benchmark.collection;

import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.infra.Blackhole;


/**
 * “Get” test: Populate a map with a pre-generated set of keys (in the JMH setup), make ~50% successful and ~50% unsuccessful “get” calls.
 * For non-identity maps with object keys we use a distinct set of keys (the different object with the same value is used for successful “get” calls).

 * "Put/update" test: Add a pre-generated set of keys to the map.
 * In the second loop, add the equal set of keys (different objects with the same values) to this map again (make the updates).
 * <p>
 * “Put/remove” test: In a loop: add 2 entries to a map, remove 1 of existing entries (“add” pointer is increased by 2 on each iteration, “remove” pointer is increased by 1).
 */
@SuppressWarnings("DuplicatedCode")
public class AndroidxObjectToObjectBenchmark implements ObjectBenchmark<AndroidxObjectToObjectBenchmark.BenchmarkGetState> {
  @State(Scope.Thread)
  public static class BenchmarkGetState extends BaseBenchmarkState {
    public androidx.collection.MutableScatterMap<ArbitraryPojo, ArbitraryPojo> map;
    ArbitraryPojo[] keys;

    @Override
    @Setup
    public void setup() throws Exception {
      ArbitraryPojo[] keys = Util.loadObjectArray(mapSize);
      androidx.collection.MutableScatterMap<ArbitraryPojo, ArbitraryPojo> map = org.jetbrains.benchmark.collection.factory.AndroidxFactory.createObjectToObject(keys.length, loadFactor);
      for (int i = 0, l = keys.length; i < l; i++) {
        // for non-identity maps with object keys, we use a distinct set of keys (the different object with the same value is used for successful “get” calls).
        ArbitraryPojo key = keys[i];
        ArbitraryPojo newKey = new ArbitraryPojo(key.obj1, key.obj2);
        if (i % oneFailureOutOf == 0) {
          newKey.index = i;
        }
        map.put(newKey, key);
      }

      this.keys = keys;
      this.map = map;
    }
  }

  @Override
  @Benchmark
  public Object get(BenchmarkGetState state, Blackhole blackhole) {
    int result = 0;
    ArbitraryPojo[] keys = state.keys;
    androidx.collection.MutableScatterMap<ArbitraryPojo, ArbitraryPojo> map = state.map;
    for (int i = 0, l = map._size; i < l; i++) {
      ArbitraryPojo key = keys[i];
      if (map.getOrDefault(key, null) == null) {
        result ^= 1;
      }
    }
    blackhole.consume(result);
    return map;
  }

  @Benchmark
  public Object put(BaseBenchmarkState.ObjectPutOrRemoveBenchmarkState state, Blackhole blackhole) {
    androidx.collection.MutableScatterMap<ArbitraryPojo, ArbitraryPojo> map = org.jetbrains.benchmark.collection.factory.AndroidxFactory.createObjectToObject(state.loadFactor);
    for (ArbitraryPojo key : state.keys) {
      map.put(key, key);
    }
    blackhole.consume(map._size);
    for (ArbitraryPojo key : state.keys2) {
      map.put(key, key);
    }
    blackhole.consume(map._size);
    return map;
  }

  @SuppressWarnings("DuplicatedCode")
  @Benchmark
  public Object remove(BaseBenchmarkState.ObjectPutOrRemoveBenchmarkState state, Blackhole blackhole) {
    androidx.collection.MutableScatterMap<ArbitraryPojo, ArbitraryPojo> map = org.jetbrains.benchmark.collection.factory.AndroidxFactory.createObjectToObject(state.loadFactor);
    int add = 0;
    int remove = 0;
    ArbitraryPojo[] keys = state.keys;
    ArbitraryPojo[] keys2 = state.keys2;
    while (add < keys.length) {
      map.put(keys[add], keys[add]);
      add++;
      map.put(keys[add], keys[add]);
      add++;
      map.remove(keys2[remove++]);
    }
    blackhole.consume(map._size);
    return map;
  }
}