package eskavi.model.configuration;

import eskavi.model.implementation.ImmutableModuleImp;
import eskavi.model.implementation.moduleimp.*;

import java.util.Collection;

public class ImplementationStub implements ImmutableModuleImp {
    private int compatible;

    public ImplementationStub(int compatible) {
        this.compatible = compatible;
    }

    public int getCompatible() {
        return compatible;
    }

    @Override
    public boolean isCompatible(Collection<ImmutableModuleImp> others, Configuration instanceConfiguration) {
        for (ImmutableModuleImp other : others) {
            ImplementationStub otherStub = (ImplementationStub) other;
            if (this.compatible != otherStub.getCompatible()) {
                return false;
            }
        }
        return instanceConfiguration.checkCompatible();
    }

    @Override
    public boolean checkCompatibleEndpoint(Endpoint endpoint) {
        return false;
    }

    @Override
    public boolean checkCompatibleSerializer(Serializer serializer) {
        return false;
    }

    @Override
    public boolean checkCompatibleDeserializer(Deserializer deserializer) {
        return false;
    }

    @Override
    public boolean checkCompatibleDispatcher(Dispatcher dispatcher) {
        return false;
    }

    @Override
    public boolean checkCompatibleAssetConnection(AssetConnection assetConnection) {
        return false;
    }

    @Override
    public boolean checkCompatibleHandler(Handler handler) {
        return false;
    }

    @Override
    public boolean checkCompatiblePersistenceManager(PersistenceManager persistenceManager) {
        return false;
    }

    @Override
    public boolean checkCompatibleInteractionStarter(InteractionStarter interactionStarter) {
        return false;
    }
}