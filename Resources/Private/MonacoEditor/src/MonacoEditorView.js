import React from 'react';
import Editor from "@monaco-editor/react";
import PropTypes from 'prop-types';
import {Icon} from "@neos-project/react-ui-components";

class MonacoEditorView extends React.Component {

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string
    };

    onChangeCallback = (value) => {
        this.props.onChange(value);
    };

    render() {
        return (
            <Editor
                width="100%"
                height="100%"
                defaultLanguage={this.props.highlightingMode}
                theme={this.props.theme}
                value={this.props.value}
                onChange={this.onChangeCallback}
                loading={<Icon icon="fas fa-spinner" spin={true} />}
            />
        );
    }
}

export default MonacoEditorView;
