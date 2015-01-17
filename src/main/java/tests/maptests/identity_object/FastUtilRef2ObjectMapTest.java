package tests.maptests.identity_object;

import it.unimi.dsi.fastutil.objects.Reference2ObjectOpenHashMap;
import tests.maptests.object.AbstractObjObjMapTest;

import java.util.Map;

/**
 * FastUtil IdentityHashMap version
 */
public class FastUtilRef2ObjectMapTest extends AbstractObjObjMapTest {
    private Map<Integer, Integer> m_map;

    @Override
    public void setup(final int[] keys, final float fillFactor, final int oneFailureOutOf ) {
        super.setup( keys, fillFactor, oneFailureOutOf );
        m_map = new Reference2ObjectOpenHashMap<>( keys.length, fillFactor );
        for (Integer key : m_keys)
            m_map.put(key % oneFailureOutOf == 0 ? key + 1 : key, key);
    }

    @Override
    public int randomGetTest() {
        int res = 0;
        for ( int i = 0; i < m_keys.length; ++i )
            if ( m_map.get( m_keys[ i ] ) != null ) res ^= 1;
        return res;
    }
}
