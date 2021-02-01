package eskavi.controller;

import com.google.common.io.Files;
import eskavi.model.configuration.Configuration;
import eskavi.model.user.ImmutableUser;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("aas")
public class AASConfigurationController {
    /**
     * @api{post}/aas Post AAS session
     * @apiName CreateSession
     * @apiGroup AAS
     * @apiVersion 0.0.1
     * @apiHeader {String} Authorization Authorization header using the Bearer schema: Bearer token
     * @apiError {String} message Errormessage
     */
    @PostMapping
    public long createSession() {
        return 0;
    }

    /**
     * @api{get}/aas Close AAS session
     * @apiName CloseSession
     * @apiGroup AAS
     * @apiVersion 0.0.1
     * @apiHeader {String} Authorization Authorization header using the Bearer schema: Bearer token
     * @apiSuccess {Number} id Session unique ID
     * @apiError {String} message Errormessage
     */
    @DeleteMapping("/{id:[0-9]+}")
    public void closeSession(@PathVariable("id") long sessionId) {
    }

    /**
     * @api{post}/aas/imp Add ModuleImplementation to Session
     * @apiName AddModleImp
     * @apiGroup AAS
     * @apiVersion 0.0.1
     * @apiHeader {String} Authorization Authorization header using the Bearer schema: Bearer token
     * @apiParam (Request body) {Number} id Session unique ID
     * @apiParam (Request body) {Number} impId Implementation unique ID
     * @apiError {String} message Errormessage
     */
    @PostMapping("{/imp")
    public void addModuleImp(@ModelAttribute("impId") long moduleId, @ModelAttribute("sessionId") long sessionId) {
    }

    /**
     * @api{get}/aas/imp/configuration Get Configuration from ModuleImplementation in Session
     * @apiName GetConfiguration
     * @apiGroup AAS
     * @apiVersion 0.0.1
     * @apiHeader {String} Authorization Authorization header using the Bearer schema: Bearer token
     * @apiParam (Request body) {Number} sessionId Session unique ID
     * @apiParam (Request body) {Number} impId Implementation unique ID
     * @apiError {String} message Errormessage
     */
    @GetMapping("/imp/configuration")
    public Configuration getConfiguration(@ModelAttribute("impId") long moduleId, @ModelAttribute("sessionId") long sessionId) {
        return null;
    }

    /**
     * @api{put}/aas/imp/configuration Update Configuration from ModuleImplementation in Session
     * @apiName PutConfiguration
     * @apiGroup AAS
     * @apiVersion 0.0.1
     * @apiHeader {String} Authorization Authorization header using the Bearer schema: Bearer token
     * @apiParam (Request body) {Number} sessionId Session unique ID
     * @apiParam (Request body) {Number} impId Implementation unique ID
     * @apiParam (Request body) {Configuration} configuration Configuration of the specified Implementation
     * @apiError {String} message Errormessage
     */
    @PutMapping("/imp/configuration")
    public void updateConfiguration(Configuration configuration, @ModelAttribute("impId") long moduleId, @ModelAttribute("id") long sessionId) {
    }

    /**
     * @api{delete}/aas/imp
     * @apiName DeleteModleImp
     * @apiGroup AAS
     * @apiVersion 0.0.1
     * @apiHeader {String} Authorization Authorization header using the Bearer schema: Bearer token
     * @apiParam (Request body) {Number} id Session unique ID
     * @apiParam (Request body) {Number} impId Implementation unique ID
     * @apiError {String} message Errormessage
     */
    @DeleteMapping("{/imp")
    public void deleteModuleImp(@ModelAttribute("impId") long moduleId, @ModelAttribute("id") long sessionId) {
    }

    /**
     * @api{get}/aas/:id/generate Generates a .java file which starts the AAS
     * @apiName GenerateJavaClass
     * @apiGroup AAS
     * @apiVersion 0.0.1
     * @apiHeader {String} Authorization Authorization header using the Bearer schema: Bearer token
     * @apiParam {Number} id Session unique ID
     * @apiError {String} message Errormessage
     */
    @GetMapping("{/id:[0-9]+}/generate")
    public byte[] generateJavaClass(@PathVariable("id") long sessionId) throws IOException {
        return Files.toByteArray(new File(""));
    }

    private boolean isAuthorized(long sessionId, ImmutableUser user) {
        return false;
    }
}
