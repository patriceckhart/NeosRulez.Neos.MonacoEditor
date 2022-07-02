# Monaco editor for the Neos CMS

This Neos CMS plugin provides the Monaco editor as property editor for the inspector. 
The Monaco Editor is the code editor that powers Visual Studio Code.

You can simply replace `Neos.Neos/Inspector/Editors/CodeEditor` with `NeosRulez.Neos.MonacoEditor/MonacoEditor`. In the best case, your code will be accepted without errors.

![MonacoEditor](https://raw.githubusercontent.com/patriceckhart/NeosRulez.Neos.MonacoEditor/master/Preview.png)

## Installation

The NeosRulez.Neos.MonacoEditor package is listed on packagist (https://packagist.org/packages/neosrulez/neos-monacoeditor) - therefore you don't have to include the package in your "repositories" entry any more.

Just run:

```
composer require neosrulez/dynamicresources-monaco
```

## How to use

Look here for more highlighting modes and themes to customize the editor: https://microsoft.github.io/monaco-editor/

```yaml
'Acme.Site.Content:Code':
  properties:
    source:
      type: string
      ui:
        label: My custom javascript
        reloadIfChanged: true
        inspector:
          editor: NeosRulez.Neos.MonacoEditor/MonacoEditor
          editorOptions:
            theme: 'vs-dark'
            buttonLabel: 'Edit JavaScript'
            highlightingMode: 'javascript'
#            highlightingMode: 'scss'
#            highlightingMode: 'html'
```

## Author

* E-Mail: mail@patriceckhart.com
* URL: http://www.patriceckhart.com 
