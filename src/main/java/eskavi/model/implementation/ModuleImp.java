package eskavi.model.implementation;

import eskavi.model.configuration.Configuration;
import eskavi.model.implementation.moduleimp.*;
import eskavi.model.user.User;

import java.util.Collection;

// TODO: is the Configuration attribute needed?
public abstract class ModuleImp extends Implementation implements ImmutableModuleImp {

    public ModuleImp(long implementationId, User author, String name, Scope scope) {
        super(implementationId, author, name, scope);
    }

    @Override
    public boolean isCompatible(Collection<ImmutableModuleImp> usedImpCollection, Configuration instanceConfiguration) {
        return true;
    }

    @Override
    public boolean checkCompatibleEndpoint(Endpoint endpoint) {
        return true;
    }

    @Override
    public boolean checkCompatibleSerializer(Serializer serializer) {
        return true;
    }

    @Override
    public boolean checkCompatibleDeserializer(Deserializer deserializer) {
        return true;
    }

    @Override
    public boolean checkCompatibleDispatcher(Dispatcher dispatcher) {
        return true;
    }

    @Override
    public boolean checkCompatibleAssetConnection(AssetConnection assetConnection) {
        return true;
    }

    @Override
    public boolean checkCompatibleHandler(Handler handler) {
        return true;
    }

    @Override
    public boolean checkCompatiblePersistenceManager(PersistenceManager persistenceManager) {
        return true;
    }

    @Override
    public boolean checkCompatibleInteractionStarter(InteractionStarter interactionStarter) {
        return true;
    }
}