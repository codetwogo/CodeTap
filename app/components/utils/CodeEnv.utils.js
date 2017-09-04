export const setTextChange = (inputBody, focus, newStr, textStates) => {
    // captures the body around our old focus point
    const bodyPreFocus = inputBody.slice(0, focus);
    const bodyPostFocus = inputBody.slice(focus + 1);
    // changes new focus point to reflect inserted text
    const newFocus = focus + newStr.length;
    // puts cursor back in to show focus position
    const newBody = bodyPreFocus + newStr + "|" + bodyPostFocus

    return {
        inputBody: newBody,
        focus: newFocus,
        textStates: [...textStates, {body: newBody, focus: newFocus}]
    }
}

export const setShiftLeft = (inputBody, focus) => {
    const newFocus = focus - 1;
    // do nothing if trying to navigate at an index that doesn't exist
    if (newFocus < 0) return {};

    const newBody = calculateNewBody(inputBody, focus, newFocus);    
    
    return {
        focus: newFocus,
        inputBody: newBody
    }
}

export const setShiftRight = (inputBody, focus) => {
    const newFocus = focus + 1;
    if (newFocus > inputBody.length) return {};

    const newBody = calculateNewBody(inputBody, focus, newFocus);
    
    return {
        focus: newFocus,
        inputBody: newBody
    }
}

export const setDelete = (inputBody, focus, textStates) => {
    const newFocus = focus - 1;
    // set no state if trying to erase non-existent text
    if (newFocus < 0) return {};

    const bodyPreFocus = body.slice(0, newFocus);
    const bodyPostFocus = body.slice(focus + 1);
    const newBody = bodyPreFocus + "|" + bodyPostFocus;

    return {
        inputBody: newBody,
        focus: newFocus,
        textStates: [...textStates, {body: newBody, focus: newFocus}]
    }
}


// helper function for shiftLeft and shiftRight
function calculateNewBody(body, focus, newFocus) {
    const oldBodyAroundFocus = body.slice(0, focus) + body.slice(focus + 1);
    return oldBodyAroundFocus.slice(0, newFocus) + "|" + oldBodyAroundFocus.slice(newFocus);
}