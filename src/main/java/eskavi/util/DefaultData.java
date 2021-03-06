package eskavi.util;

import eskavi.model.configuration.Configuration;
import eskavi.model.configuration.DataType;
import eskavi.model.configuration.KeyExpression;
import eskavi.model.configuration.TextField;
import eskavi.model.implementation.ImplementationScope;
import eskavi.model.implementation.MessageType;
import eskavi.model.implementation.ProtocolType;
import eskavi.model.implementation.moduleimp.*;
import eskavi.model.user.SecurityQuestion;
import eskavi.model.user.User;
import eskavi.model.user.UserLevel;
import eskavi.repository.ImplementationRepository;
import eskavi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DefaultData implements ApplicationRunner {
    @Autowired
    private Config config;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ImplementationRepository implementationRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        User admin = new User("admin@eskavi.com", new BCryptPasswordEncoder().encode("admin"), UserLevel.ADMINISTRATOR, SecurityQuestion.MAIDEN_NAME, "julia");
        userRepository.save(admin);
        User publicUser = new User("public@eskavi.com", "", UserLevel.BASIC_USER, SecurityQuestion.MAIDEN_NAME, "");
        userRepository.save(publicUser);

        Configuration dummy = new TextField("dummy", false, new KeyExpression("Dummy(\"", "\");"), DataType.TEXT);

        MessageType messageType = new MessageType(config.getMESSAGE_TYPE(), admin, "DefaultMessageType", ImplementationScope.PRIVATE);
        messageType = implementationRepository.save(messageType);

        ProtocolType protocolType = new ProtocolType(config.getPROTOCOL_TYPE(), admin, "DefaultProtocolType", ImplementationScope.PRIVATE);
        protocolType = implementationRepository.save(protocolType);

        AssetConnection assetConnection = new AssetConnection(config.getASSET_CONNECTION(), admin, "DefaultAssetConnection", ImplementationScope.PRIVATE, dummy);
        implementationRepository.save(assetConnection);

        InteractionStarter interactionStarter = new InteractionStarter(config.getINTERACTION_STARTER(), admin, "DefaultInteractionStarter", ImplementationScope.PRIVATE, dummy);
        implementationRepository.save(interactionStarter);

        PersistenceManager persistenceManager = new PersistenceManager(config.getPERSISTENCE_MANAGER(), admin, "DefaultPersistenceManager", ImplementationScope.PRIVATE, dummy);
        implementationRepository.save(persistenceManager);

        Deserializer deserializer = new Deserializer(config.getDESERIALIZER(), admin, "DefaultDeserializer", ImplementationScope.PRIVATE, dummy, messageType, protocolType);
        implementationRepository.save(deserializer);

        Dispatcher dispatcher = new Dispatcher(config.getDISPATCHER(), admin, "DefaultDispatcher", ImplementationScope.PRIVATE, dummy, messageType);
        implementationRepository.save(dispatcher);

        Endpoint endpoint = new Endpoint(config.getENDPOINT(), admin, "DefaultEndpoint", ImplementationScope.PRIVATE, dummy, protocolType);
        implementationRepository.save(endpoint);

        Serializer serializer = new Serializer(config.getSERIALIZER(), admin, "DefaultSerializer", ImplementationScope.PRIVATE, dummy, messageType, protocolType);
        implementationRepository.save(serializer);

        Handler handler = new Handler(config.getHANDLER(), admin, "DefaultHandler", ImplementationScope.PRIVATE, dummy, messageType);
        implementationRepository.save(handler);

        Environment environment = new Environment(config.getENVIRONMENT(), admin, "DefaultEnvironment", ImplementationScope.PRIVATE, dummy);
        implementationRepository.save(environment);

    }
}
