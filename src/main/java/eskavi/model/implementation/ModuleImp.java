package eskavi.model.implementation;

import eskavi.model.configuration.Configuration;
import eskavi.model.configuration.ConfigurationAggregate;
import eskavi.model.configuration.KeyExpression;
import eskavi.model.implementation.moduleimp.*;
import eskavi.model.user.User;

import javax.persistence.Entity;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

/**
 * This abstract class inherits the class Implementation and implements the interface ImmutableModuleImp.
 * It serves as a representation of module implementations that can be used as part of an AAS.
 *
 * @author Andrii Strynzha, David Kaufmann, Maximilian Georg
 * @version 1.0.0
 */
@Entity
public abstract class ModuleImp extends Implementation implements ImmutableModuleImp {
    // TODO consider making configuration an entity to resolve spring
    private ConfigurationAggregate configurationRoot;

    public ModuleImp() {
    }

    public ModuleImp(long implementationId, User author, String name, ImplementationScope impScope, Configuration templateConfiguration) {
        super(implementationId, author, name, impScope);
        setConfigurationRoot(templateConfiguration);
    }

    @Override
    public boolean isCompatible(Collection<ImmutableModuleImp> usedImpCollection) {
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

    /**
     * Default getter for configuration attribute
     *
     * @return configuration
     */
    public Configuration getConfigurationRoot() {
        return this.configurationRoot;
    }

    /**
     * Default setter for configuration attribute
     *
     * @param configurationRoot configuration to set
     */
    public void setConfigurationRoot(Configuration configurationRoot) {
        if (configurationRoot.getClass() == ConfigurationAggregate.class)
            this.configurationRoot = (ConfigurationAggregate) configurationRoot;
        else {
            this.configurationRoot = new ConfigurationAggregate("root", false, new KeyExpression("", ""),
                    List.of(configurationRoot), false);
        }
    }

    public HashSet<ImmutableGenericImp> getGenerics() {
        return new HashSet<>();
    }

    @Override
    public boolean isValid() {
        return super.isValid() && configurationRoot.isValid();
    }
}
