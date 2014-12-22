Ext.data.JsonP.C_IStringInstrument({"requires":[],"mixins":[],"parentMixins":[],"uses":[],"extends":"C.Instrument","alternateClassNames":[],"members":[{"meta":{},"owner":"C.IStringInstrument","name":"_checkBase","id":"method-_checkBase","tagname":"method"},{"meta":{"private":true},"owner":"C.Instrument","name":"_checkChord","id":"method-_checkChord","tagname":"method"},{"meta":{"deprecated":{"text":"\n"},"private":true},"owner":"C.IStringInstrument","name":"_getVariations","id":"method-_getVariations","tagname":"method"},{"meta":{"private":true},"owner":"C.Instrument","name":"_initChordData","id":"method-_initChordData","tagname":"method"},{"meta":{"private":true},"owner":"C.Instrument","name":"_procChord","id":"method-_procChord","tagname":"method"},{"meta":{},"owner":"C.Instrument","name":"_setDifficulty","id":"method-_setDifficulty","tagname":"method"},{"meta":{"private":true},"owner":"C.IStringInstrument","name":"_slideWindow","id":"method-_slideWindow","tagname":"method"},{"meta":{},"owner":"C.Instrument","name":"diagram","id":"method-diagram","tagname":"method"},{"meta":{},"owner":"C.IStringInstrument","name":"diagramHTML","id":"method-diagramHTML","tagname":"method"},{"meta":{},"owner":"C.Instrument","name":"diagramNext","id":"method-diagramNext","tagname":"method"},{"meta":{},"owner":"C.Instrument","name":"diagramPrev","id":"method-diagramPrev","tagname":"method"},{"meta":{},"owner":"C.IStringInstrument","name":"drawInstrument","id":"method-drawInstrument","tagname":"method"},{"meta":{},"owner":"C.IStringInstrument","name":"getChordDiff","id":"method-getChordDiff","tagname":"method"},{"meta":{},"owner":"C.Instrument","name":"getNoteForString","id":"method-getNoteForString","tagname":"method"},{"meta":{},"owner":"C.Instrument","name":"getNumPos","id":"method-getNumPos","tagname":"method"},{"meta":{},"owner":"C.Instrument","name":"getPlayableOffForString","id":"method-getPlayableOffForString","tagname":"method"},{"meta":{},"owner":"C.Instrument","name":"getStringRoot","id":"method-getStringRoot","tagname":"method"},{"meta":{},"owner":"C.IStringInstrument","name":"isChordPlayable","id":"method-isChordPlayable","tagname":"method"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/C.Class' rel='C.Class' class='docClass'>C.Class</a><div class='subclass '><a href='#!/api/C.Instrument' rel='C.Instrument' class='docClass'>C.Instrument</a><div class='subclass '><strong>C.IStringInstrument</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/C.Bazooka' rel='C.Bazooka' class='docClass'>C.Bazooka</a></div><div class='dependency'><a href='#!/api/C.Guitar' rel='C.Guitar' class='docClass'>C.Guitar</a></div><h4>Files</h4><div class='dependency'><a href='source/IStringInstrument.html#C-IStringInstrument' target='_blank'>IStringInstrument.js</a></div></pre><div class='doc-contents'><p>Base class for all string instruments. Mainly\ndiagram plotting happens here</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_checkBase' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.IStringInstrument'>C.IStringInstrument</span><br/><a href='source/IStringInstrument.html#C-IStringInstrument-method-_checkBase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.IStringInstrument-method-_checkBase' class='name expandable'>_checkBase</a>( <span class='pre'>c, root</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Check that the chord start with the base note... ...</div><div class='long'><p>Check that the chord start with the base note...\nMAYBE: Optional?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>root</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_checkChord' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-_checkChord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-_checkChord' class='name expandable'>_checkChord</a>( <span class='pre'>chord</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>TODO: Add 9ths rules... ...</div><div class='long'><p>TODO: Add 9ths rules...</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>chord</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-_getVariations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.IStringInstrument'>C.IStringInstrument</span><br/><a href='source/IStringInstrument.html#C-IStringInstrument-method-_getVariations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.IStringInstrument-method-_getVariations' class='name expandable'>_getVariations</a>( <span class='pre'>data, chord</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Boolean<span class=\"signature\"><span class='deprecated' >deprecated</span><span class='private' >private</span></span></div><div class='description'><div class='short'>Return all partial positions for this chord given\nthe number of tones/piches in it ...</div><div class='long'><p>Return all partial positions for this chord given\nthe number of tones/piches in it</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprected</strong> </p>\n        \n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>chord</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Boolean</span><div class='sub-desc'><p>false if not partials exist</p>\n</div></li></ul></div></div></div><div id='method-_initChordData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-_initChordData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-_initChordData' class='name expandable'>_initChordData</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Init chord data structure ...</div><div class='long'><p>Init chord data structure</p>\n</div></div></div><div id='method-_procChord' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-_procChord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-_procChord' class='name expandable'>_procChord</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Process chord and find the positions for each formula\npart on each string... ...</div><div class='long'><p>Process chord and find the positions for each formula\npart on each string...</p>\n</div></div></div><div id='method-_setDifficulty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-_setDifficulty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-_setDifficulty' class='name expandable'>_setDifficulty</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Generic diff ...</div><div class='long'><p>Generic diff</p>\n</div></div></div><div id='method-_slideWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.IStringInstrument'>C.IStringInstrument</span><br/><a href='source/IStringInstrument.html#C-IStringInstrument-method-_slideWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.IStringInstrument-method-_slideWindow' class='name expandable'>_slideWindow</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>WARNING: This is a FUCKED UP FUNCTION that you DONT want to mess up with... ...</div><div class='long'><p>WARNING: This is a FUCKED UP FUNCTION that you DONT want to mess up with... However,\nyou might wanna optimize it... so feel free!</p>\n\n<p>Now, this function builds chords from formula parts. It works as a sliding window\nstarting from fret number 0 (which can optionally be considered as free/open - see\ninstrument options). It will make all combinations of numbers/pos that can be done\nin this \"box/window\". Steps:</p>\n\n<ol>\n<li><p>For each window, create a chord representation including the minimum\nnumbers. Numbers that are in the box but not minimum will be stored as\nalternatives</p></li>\n<li><p>Expand all the alternatives for all the strings (combinatorial) and create\nnew chord positions (since we do know they fall into the window)</p></li>\n<li><p>Get chord variations for each created chord... variation is considered a\ncomplete chord without using the base strings (ie F=[ 1 3 3 2 1 1 ],\nF_variation = [ -1 -1 -3 2 1 1] and derives from F). Append these to the\nchord list</p></li>\n<li><p>Filter crappy representations out by:</p></li>\n<li> _checkBase: ensuring correct base string (not sure is correct...)</li>\n<li> isEmpty: Make sure chord is not empty</li>\n<li> ._chordPosExists: No duplicates</li>\n<li> isChordPlayable: Based on the instrument make sure the chord is playable</li>\n<li><p> _checkChord: Verify that the chord has all required formula parts</p></li>\n<li><p>Append the remaining chords in the result: this.c.pos which is an array\nof <a href=\"#!/api/C.ChordRep\" rel=\"C.ChordRep\" class=\"docClass\">C.ChordRep</a></p></li>\n</ol>\n\n</div></div></div><div id='method-diagram' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-diagram' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-diagram' class='name expandable'>diagram</a>( <span class='pre'>what, el, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Base of diagram, ensure that what is a chord representation\nand store info... ...</div><div class='long'><p>Base of diagram, ensure that what is a chord representation\nand store info...</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>what</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-diagramHTML' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.IStringInstrument'>C.IStringInstrument</span><br/><a href='source/IStringInstrument.html#C-IStringInstrument-method-diagramHTML' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.IStringInstrument-method-diagramHTML' class='name expandable'>diagramHTML</a>( <span class='pre'>what, el, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Make this chord diagram on an element ...</div><div class='long'><p>Make this chord diagram on an element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>what</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-diagramNext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-diagramNext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-diagramNext' class='name expandable'>diagramNext</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Show next chord ...</div><div class='long'><p>Show next chord</p>\n</div></div></div><div id='method-diagramPrev' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-diagramPrev' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-diagramPrev' class='name expandable'>diagramPrev</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Show prev chord ...</div><div class='long'><p>Show prev chord</p>\n</div></div></div><div id='method-drawInstrument' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.IStringInstrument'>C.IStringInstrument</span><br/><a href='source/IStringInstrument.html#C-IStringInstrument-method-drawInstrument' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.IStringInstrument-method-drawInstrument' class='name expandable'>drawInstrument</a>( <span class='pre'>el, opts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Make this chord diagram on an element ...</div><div class='long'><p>Make this chord diagram on an element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getChordDiff' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.IStringInstrument'>C.IStringInstrument</span><br/><a href='source/IStringInstrument.html#C-IStringInstrument-method-getChordDiff' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.IStringInstrument-method-getChordDiff' class='name expandable'>getChordDiff</a>( <span class='pre'>c</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Change and loop:\n    - Higher priority chords on top\n    - UnInterapted patters (x ONLY)\n    - Make sure the distance...</div><div class='long'><p>Change and loop:\n    - Higher priority chords on top\n    - UnInterapted patters (x ONLY)\n    - Make sure the distance between fret and o is small\n    - Make sure a base string is played!\n    - Span, the sorter the better\n    - Number of position &lt; the better</p>\n\n<p>TODO:FIXME: This does not work very well... find another way</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getNoteForString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-getNoteForString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-getNoteForString' class='name expandable'>getNoteForString</a>( <span class='pre'>s, offset</span> ) : <a href=\"#!/api/C.Note\" rel=\"C.Note\" class=\"docClass\">C.Note</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get a note given the string number and the offset on it... ...</div><div class='long'><p>Get a note given the string number and the offset on it...\nIf -1 is given, the root note of the string is returned\nwith -1 playable index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Number<div class='sub-desc'><p>String index (from pos)</p>\n</div></li><li><span class='pre'>offset</span> : Number<div class='sub-desc'><p>Offset</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/C.Note\" rel=\"C.Note\" class=\"docClass\">C.Note</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNumPos' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-getNumPos' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-getNumPos' class='name expandable'>getNumPos</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the number of positions for the current\nchord mapped on this instrument ...</div><div class='long'><p>Get the number of positions for the current\nchord mapped on this instrument</p>\n</div></div></div><div id='method-getPlayableOffForString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-getPlayableOffForString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-getPlayableOffForString' class='name expandable'>getPlayableOffForString</a>( <span class='pre'>s, offset</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get playable note offset given a string and the offset\non that string ...</div><div class='long'><p>Get playable note offset given a string and the offset\non that string</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>offset</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getStringRoot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/C.Instrument' rel='C.Instrument' class='defined-in docClass'>C.Instrument</a><br/><a href='source/Instrument.html#C-Instrument-method-getStringRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.Instrument-method-getStringRoot' class='name expandable'>getStringRoot</a>( <span class='pre'>s, noPlayable</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return to root not for string s. ...</div><div class='long'><p>Return to root not for string s. If noPlayable is set\nit will not attempt to set playable position... This is\nneeded for getPlayableOffForString which causes a loop</p>\n\n<p>NOTE: Do not cache root notes, cause then we need to clone\nthem, which takes a lot longer than creating...</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>noPlayable</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-isChordPlayable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.IStringInstrument'>C.IStringInstrument</span><br/><a href='source/IStringInstrument.html#C-IStringInstrument-method-isChordPlayable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.IStringInstrument-method-isChordPlayable' class='name expandable'>isChordPlayable</a>( <span class='pre'>c</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Return true if the chord is playable. ...</div><div class='long'><p>Return true if the chord is playable. This is decided based on the\ninstrument parameters. Skilled players may need to create new instruments\nbut this should cover most ppl.</p>\n\n<p>The parameters are supplied via options in the constructor and they are:</p>\n\n<ul>\n<li><p>hasBar: true/false, If the instrument supports bar chords... with a bar\nchord the minimum duplicate pos is considered to be occuping 1 finger</p></li>\n<li><p>ignoreTone0: true/false, Mainly true for string instruments. The 0 is\nconsidered open and does nto need a finger (used also in _slideWindow)</p></li>\n<li><p>maxPlayableTones: 4/5, Usually the same number as the fingers?!</p></li>\n<li><p>maxFretSpan: 4, how many frets a chord can occupy (width)</p></li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","aliases":{},"short_doc":"Base class for all string instruments. ...","meta":{},"autodetected":{},"component":false,"files":[{"filename":"IStringInstrument.js","href":"IStringInstrument.html#C-IStringInstrument"}],"name":"C.IStringInstrument","superclasses":["C.Class","C.Instrument"],"id":"class-C.IStringInstrument","mixedInto":[],"subclasses":["C.Bazooka","C.Guitar"],"tagname":"class"});