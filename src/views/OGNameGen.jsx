import React from 'react';
import View from "../components/View";
import Col from "../components/Col";
import ToggleButton from "../components/Form/ToggleButton";
import Button from "../components/Form/Button";

class OGNameGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outputName: "",
            inputName: "",
            addPrefix: false,
            addSuffix: false,
            replaceVowels: false
        };

        this.prefixes = ["Re", "Dis", "Un", "De"];
        this.suffixes = ["icated", "ified", "ity", "ness", "ify"];
    }

    updateInputName = (fieldContent) => {
        this.setState({inputName: fieldContent === undefined ? '' : fieldContent}, this.generateName)
    }

    generateName = () => {
        let generatedName = this.state.inputName;

        if (this.state.replaceVowels) {
            let vowel = Math.round(Math.random()) ? 'x' : 'q';
            generatedName = generatedName.replaceAll(/[aeiou](?![aeiou])+?/g, vowel);
        }

        if (this.state.addPrefix) {
            let prefix = this.prefixes[Math.floor(Math.random() * this.prefixes.length)];
            generatedName = prefix + generatedName;
        }

        if (this.state.addSuffix) {
            let suffix = this.suffixes[Math.floor(Math.random() * this.suffixes.length)];
            generatedName = generatedName + suffix;
        }

        this.setState({outputName: generatedName});
    };

    render() {
        return (
            <View>
                <Col width="4" centered={false}>
                    <div className="row">
                        <h1>"OG" Name Generator</h1>
                    </div>
                    <label htmlFor="ogname"><h3>Name to "Og"-ify</h3></label>
                    <input type="text" name="ogname" id="ogname"
                           className="form-control bg-dark text-white"
                           onChange={e => this.updateInputName(e.target.value)}/>

                    <h3>"Og"-ifiers:</h3>
                    <div className="btn-group-vertical" role="group" style={{width: '100%'}}>
                        <ToggleButton name="addPrefix" text="Add a prefix?"
                                      action={e => this.setState({addPrefix: e.target.checked}, this.generateName)}/>
                        <ToggleButton name="addSuffix" text="Add a suffix?"
                                      action={e => this.setState({addSuffix: e.target.checked}, this.generateName)}/>
                        <ToggleButton name="replaceVowels" text="Replace vowels with 'x' or 'q'?"
                                      action={e => this.setState({replaceVowels: e.target.checked}, this.generateName)}/>
                    </div>
                </Col>
                <Col centered={true}>
                    <h1 id="generatedName" style={{fontWeight: 100, textAlign: 'center', visibility: this.state.inputName ? 'visible' : 'hidden'}}>
                        {this.state.outputName}
                    </h1>
                    <Button name="generateName"
                            text="Regenerate Name"
                            action={_ => this.generateName()}
                            style={{width: '50%', visibility: this.state.inputName ? 'visible' : 'hidden'}}/>
                </Col>
            </View>
        );
    }
}

export default OGNameGen;