export const returnNewBodyAndStates = (inputBody, focus, newStr, textStates) => {
    const bodyPreFocus = inputBody.slice(0, focus);
    const bodyPostFocus = inputBody.slice(focus + 1, inputBody.length);
    const newFocus = focus + newStr.length;
    const newBody = bodyPreFocus + str + "|" + bodyPostFocus

    return {
        inputBody: newBody,
        focus: newFocus,
        textStates: [...textStates, {body: newBody, focus: newFocus}]
    }
}