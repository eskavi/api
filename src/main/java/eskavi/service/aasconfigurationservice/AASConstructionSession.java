package eskavi.service.aasconfigurationservice;

import eskavi.model.configuration.Configuration;
import eskavi.model.implementation.ModuleInstance;
import eskavi.model.user.User;

import java.util.LinkedHashMap;
import java.util.Map;

public class AASConstructionSession {
    private long sessionId;
    private User owner;
    private Map<Long, ModuleInstance> miMap;

    public AASConstructionSession(long sessionId, User owner) {
        this.sessionId = sessionId;
        this.owner = owner;
        this.miMap = new LinkedHashMap<>();
    }

    public long getSessionId() {
        return sessionId;
    }

    public void addModuleInstance(ModuleInstance moduleInstance) {
        miMap.put(moduleInstance.getImpId(), moduleInstance);
    }

    public void removeModuleInstance(long moduleId) throws IllegalAccessException {
        if (!miMap.containsKey(moduleId)) {
            throw new IllegalAccessException("no MI with id " + moduleId + " is found in session");
        }
        miMap.remove(moduleId);
    }

    public void updateInstanceConfiguration(long moduleId, Configuration updateConfig) throws IllegalAccessException {
        if (!miMap.containsKey(moduleId)) {
            throw new IllegalAccessException("no MI with id " + moduleId + " is found in session");
        }
        ModuleInstance mi = miMap.get(moduleId);
        mi.setInstanceConfiguration(updateConfig);
        miMap.replace(moduleId, mi);
    }

    public Configuration getConfiguration(long moduleId) {
        return miMap.get(moduleId).getInstanceConfiguration();
    }

    // TODO public File generateJavaClass()

    private boolean isValid() {
        //TODO
        return false;
    }

}