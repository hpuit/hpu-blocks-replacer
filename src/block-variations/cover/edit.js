import { InspectorControls } from "@wordpress/block-editor/";
import { Component } from "@wordpress/element";
import { Panel } from "@wordpress/components";
import StyleSelector from "../../style-selector";


export default class HPUCoverEdit extends Component {
    componentDidMount() {
        // Get the cover element
        const coverElement = document.querySelector('.hpu-blocks-cover .wp-block-cover__inner-container');

        // Check if the element exists before calling getBoundingClientRect
        if (coverElement !== null) {
            const rect = coverElement.getBoundingClientRect();
            console.log(rect);
        }
    }

    render() {
        return (
            <div>
                <InspectorControls>
                    <Panel header="HPU Blocks Cover Settings" className='hpu-blocks-emphasis-style'>
                        <StyleSelector
                            value={attributes.styleClass}
                            onChange={(newValue) => setAttributes({ styleClass: newValue })}
                        />
                    </Panel>
                </InspectorControls>
                <p>HPUCoverEdit</p>
            </div>
        );
    }
}