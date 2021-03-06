package eskavi.service.aasconfigurationservice;

import eskavi.model.implementation.ProtocolType;
import eskavi.model.implementation.moduleimp.Endpoint;
import eskavi.util.ImpCreatorUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.FileNotFoundException;
import java.util.Scanner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class AASConstructionSessionTest {
    private ImpCreatorUtil imps;
    private AASConstructionSession testObject;

    @BeforeEach
    void setUp() {
        this.imps = new ImpCreatorUtil();
        this.testObject = new AASConstructionSession(0, imps.getUserA());
        testObject.addModuleInstance(ModuleInstanceFactory.build(imps.getAssetConnection()));
        testObject.addModuleInstance(ModuleInstanceFactory.build(imps.getInteractionStarter()));
        testObject.addModuleInstance(ModuleInstanceFactory.build(imps.getPersistenceManager()));
        testObject.addModuleInstance(ModuleInstanceFactory.build(imps.getEndpoint()));
    }

    @Test
    void testGenerateJavaClassValid() throws FileNotFoundException {
        String data = "";
        Scanner myReader = new Scanner(testObject.generateJavaClass());
        while (myReader.hasNextLine()) {
            data = data + "\n" + myReader.nextLine();
        }
        // To remove first newline
        data = data.substring(1);
        assertEquals("class App {\n" +
                "  public static void main(String[] args) throws IOException {\n" +
                "    Endpoint endpoint =\n" +
                "        Builder()\n" +
                "            .mapping(\n" +
                "                Serializer.builder().dummy(\"dummy\").build(),\n" +
                "                Deserializer.builder().dummy(\"dummy\").build(),\n" +
                "                Dispatcher.builder().handler(Handler.builder().dummy(\"dummy\").build()).build())\n" +
                "            .port(8080)\n" +
                "            .build();\n" +
                "    Assetconnection assetconnection = Builder().dummy(\"dummy\").build();\n" +
                "    InteractionStarter interactionstarter = Builder().dummy(\"dummy\").build();\n" +
                "    PersistanceManager persistancemanager = Builder().dummy(\"dummy\").build();\n" +
                "    AasService service =\n" +
                "        AasService.builder()\n" +
                "            .endpoint(endpoint)\n" +
                "            .assetConnection(assetconnection)\n" +
                "            .interactionStarter(interactionstarter)\n" +
                "            .persistenceManager(persistancemanager)\n" +
                "            .build();\n" +
                "    AasServiceManager.Instance.setAasService(service);\n" +
                "    service.start();\n" +
                "  }\n" +
                "}", data);
    }

    @Test
    void testGenerateJavaClassFailure() {

        Endpoint endpoint = imps.getEndpoint();
        endpoint.setProtocolType(new ProtocolType());
        testObject.addModuleInstance(ModuleInstanceFactory.build(endpoint));
        try {
            testObject.generateJavaClass();
            assertTrue(false);
        } catch (IllegalArgumentException e) {
            assertTrue(true);
        }
    }


}
