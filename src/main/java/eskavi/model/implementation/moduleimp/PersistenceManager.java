package eskavi.model.implementation.moduleimp;

import eskavi.model.configuration.Configuration;
import eskavi.model.implementation.ImmutableModuleImp;
import eskavi.model.implementation.ImplementationScope;
import eskavi.model.implementation.ModuleImp;
import eskavi.model.user.User;

import javax.persistence.Entity;
import java.util.Collection;

/**
 * This class inherits the abstract class ModuleImp and represents an MI of the type Persistence Manager.
 *
 * @author Andrii Strynzha, David Kaufmann, Maximilian Georg
 * @version 1.0.0
 */
@Entity
public class PersistenceManager extends ModuleImp {
    public PersistenceManager() {
    }

    /**
     * Constructs a persistance manager object.
     * @param implementationId id
     * @param author author
     * @param name name
     * @param impScope implementation Scope
     * @param templateConfiguration configuration of this moduleImp
     */
    public PersistenceManager(long implementationId, User author, String name, ImplementationScope impScope, Configuration templateConfiguration) {
        super(implementationId, author, name, impScope, templateConfiguration);
    }

    @Override
    public boolean isCompatible(Collection<ImmutableModuleImp> usedImpCollection) {
        for (ImmutableModuleImp usedImp : usedImpCollection) {
            if (!usedImp.checkCompatiblePersistenceManager(this)) {
                return false;
            }
        }
        return true;
    }

    @Override
    public boolean checkCompatiblePersistenceManager(PersistenceManager persistenceManager) {
        return persistenceManager.equals(this);
    }

    @Override
    public String toString() {
        return "PersistenceManager" + super.toString();
    }
}
