import React from 'react';
import View from "../components/View";
import Col from "../components/Col";
import Checkbox from "../components/Form/Checkbox";
import Button from "../components/Form/Button";

class OGNameGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outputName: "",
            inputName: ""
        }

        this.prefixes = ["Re", "Dis", "Un", "De"];
        this.suffixes = ["icated", "ified", "ity", "ness", "ify"];
    }

    generateName = (inputName) => {
        if (inputName !== undefined)
            this.setState({inputName: inputName})
    }

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
                           onChange={e => this.generateName(e.target.value)}/>

                    <h3>"Og"-ifiers:</h3>
                    <div className="btn-group-vertical" role="group" style={{width: '100%'}}>
                        <Checkbox name="addPrefix" text="Add a prefix?"/>
                        <Checkbox name="addSuffix" text="Add a suffix?"/>
                        <Checkbox name="replaceVowels" text="Replace vowels with 'x' or 'q'?"/>
                    </div>
                </Col>
                <Col centered={true}>
                    <h1 id="generatedName" style={{fontWeight: 100, textAlign: 'center'}}>{this.state.name}</h1>
                    <Button name="generateName" text="Regenerate Name" action={this.generateName} style={{width: '50%'}}/>
                </Col>
            </View>
        );
    }
}

export default OGNameGen;