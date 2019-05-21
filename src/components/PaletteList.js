import React from "react"
import {Row} from 'react-bootstrap'
import Palette from "./Palette";

function PaletteList({palettes}) {
    return (
        <Row className="margin-both p-3">
            {palettes.map((palette, i) => <Palette key={i} palette={palette}/>)}
        </Row>
    )
}

export default PaletteList