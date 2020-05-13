package org.jetbrains.benchmark.collection

import it.unimi.dsi.fastutil.objects.Object2LongArrayMap
import org.openjdk.jmh.infra.Blackhole

internal class TroveJbIntToIntMemoryBenchmark : Measurer {
  override fun measure(size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val benchmark = TroveJbIntToIntBenchmark()
    measureGet(benchmark, size, operations, blackhole)

    val state = BaseBenchmarkState.IntPutOrRemoveBenchmarkState()
    configureSetup(state, size)
    state.setup()

    addOperation("trove-jb_put", operations, benchmark.put(state, blackhole))
    addOperation("trove-jb_remove", operations, benchmark.remove(state, blackhole))
  }

  private fun measureGet(benchmark: TroveJbIntToIntBenchmark, size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val state = TroveJbIntToIntBenchmark.GetBenchmarkState()
    configureSetup(state, size)
    state.setup()

    benchmark.get(state, blackhole)
    addOperation("trove-jb_get", operations, state.map)
  }
}

internal class TroveJbIntToObjectMemoryBenchmark : Measurer {
  override fun measure(size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val benchmark = TroveJbIntToObjectBenchmark()
    measureGet(benchmark, size, operations, blackhole)

    val state = BaseBenchmarkState.IntToObjectPutOrRemoveBenchmarkState()
    configureSetup(state, size)
    state.setup()

    addOperation("trove-jb_put", operations, benchmark.put(state, blackhole))
    addOperation("trove-jb_remove", operations, benchmark.remove(state, blackhole))
  }

  private fun measureGet(benchmark: TroveJbIntToObjectBenchmark, size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val state = TroveJbIntToObjectBenchmark.IntToObjectGetBenchmarkState()
    configureSetup(state, size)
    state.setup()

    benchmark.get(state, blackhole)
    addOperation("trove-jb_get", operations, state.map)
  }
}

internal class TroveJbObjectToIntMemoryBenchmark : Measurer {
  override fun measure(size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val benchmark = TroveJbIntToObjectBenchmark()
    measureGet(benchmark, size, operations, blackhole)

    val state = BaseBenchmarkState.ObjectToIntPutOrRemoveBenchmarkState()
    configureSetup(state, size)
    state.setup()

    addOperation("trove-jb_put", operations, benchmark.objectPut(state, blackhole))
    addOperation("trove-jb_remove", operations, benchmark.objectRemove(state, blackhole))
  }

  private fun measureGet(benchmark: TroveJbIntToObjectBenchmark, size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val state = TroveJbIntToObjectBenchmark.ObjectToIntGetBenchmarkState()
    configureSetup(state, size)
    state.setup()

    benchmark.objectGet(state, blackhole)
    addOperation("trove-jb_get", operations, state.map)
  }
}

internal class TroveJbObjectToObjectMemoryBenchmark : Measurer {
  override fun measure(size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val benchmark = TroveJbObjectToObjectBenchmark()
    measureGet(benchmark, size, operations, blackhole)

    val state = BaseBenchmarkState.ObjectPutOrRemoveBenchmarkState()
    configureSetup(state, size)
    state.setup()

    addOperation("trove-jb_put", operations, benchmark.put(state, blackhole))
    addOperation("trove-jb_remove", operations, benchmark.remove(state, blackhole))
  }

  private fun measureGet(benchmark: TroveJbObjectToObjectBenchmark, size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val state = TroveJbObjectToObjectBenchmark.BenchmarkGetState()
    configureSetup(state, size)
    state.setup()

    benchmark.get(state, blackhole)
    addOperation("trove-jb_get", operations, state.map)
  }
}

internal class TroveJbReferenceToObjectMemoryBenchmark : Measurer {
  override fun measure(size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val benchmark = TroveJbObjectToObjectBenchmark()
    measureGet(benchmark, size, operations, blackhole)

    val state = BaseBenchmarkState.ReferencePutOrRemoveBenchmarkState()
    configureSetup(state, size)
    state.setup()

    addOperation("trove-jb_put", operations, benchmark.identityPut(state, blackhole))
    addOperation("trove-jb_remove", operations, benchmark.identityRemove(state, blackhole))
  }

  private fun measureGet(benchmark: TroveJbObjectToObjectBenchmark, size: String, operations: Object2LongArrayMap<String>, blackhole: Blackhole) {
    val state = TroveJbObjectToObjectBenchmark.IdentityBenchmarkGetState()
    configureSetup(state, size)
    state.setup()

    benchmark.identityGet(state, blackhole)
    addOperation("trove-jb_get", operations, state.map)
  }
}