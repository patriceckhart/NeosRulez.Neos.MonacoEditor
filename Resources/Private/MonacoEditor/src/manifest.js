import manifest from "@neos-project/neos-ui-extensibility";
import MonacoEditor from "./MonacoEditor";
import MonacoEditorView from "./MonacoEditorView";

manifest('NeosRulez.Neos.MonacoEditor:MonacoEditor', {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    const secondaryEditorsRegistry = globalRegistry.get('inspector').get('secondaryEditors');
    editorsRegistry.set('NeosRulez.Neos.MonacoEditor/MonacoEditor', {
        component: MonacoEditor,
    });
    secondaryEditorsRegistry.set('NeosRulez.Neos.MonacoEditor/MonacoEditorView', {
        component: MonacoEditorView,
    });
});
