import React from 'react';
import PropTypes from 'prop-types';
import {$get} from 'plow-js';
import {Button, Icon} from "@neos-project/react-ui-components";
import {neos} from '@neos-project/neos-ui-decorators';

@neos(globalRegistry => ({
    secondaryEditorsRegistry: globalRegistry.get('inspector').get('secondaryEditors')
}))
class MonacoEditor extends React.Component {

    static propTypes = {
        commit: PropTypes.func.isRequired,
        value: PropTypes.string,
        renderSecondaryInspector: PropTypes.func.isRequired,
        secondaryEditorsRegistry: PropTypes.object.isRequired,
        options: PropTypes.object
    };

    render() {

        const handleClick = () => disabled ? null : this.handleOpenMonacoEditor;
        const {options} = this.props;
        const disabled = $get('options.disabled', this.props);

        return (
            <Button style="lighter" disabled={disabled} onClick={handleClick()} >
                <Icon icon="pencil" padded="right" title="Edit" />
                <span>{options.buttonLabel}</span>
            </Button>
        );
    }

    handleChange = (newValue) => {
        this.props.commit(newValue);
    };

    handleOpenMonacoEditor = () => {
        const {secondaryEditorsRegistry} = this.props;
        const {component: MonacoEditorView} = secondaryEditorsRegistry.get('NeosRulez.Neos.MonacoEditor/MonacoEditorView');

        this.props.renderSecondaryInspector('MONACO_EDITOR', () =>
            <MonacoEditorView value={this.props.value} onChange={this.handleChange} highlightingMode={this.props.options.highlightingMode} theme={this.props.options.theme} />
        );
    }
}

export default MonacoEditor;
