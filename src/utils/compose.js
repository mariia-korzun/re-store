const compose = (...functions) => (component) => {
    return functions.reduceRight((prevValue, func) => {
        return func(prevValue)
    }, component)
}

export default compose