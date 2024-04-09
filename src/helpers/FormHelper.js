
const GenerateFormData = (event) => {
    let formData = new FormData();

    if (event) {
        for (let target of event.target) {
            const name = target.name.trim();
            const value = target.value;

            if (name.length > 0) {
                formData = IncludeKeyValueOnFormData(formData, name, value);
            }
        }
    }

    return formData;
}


const IncludeKeyValueOnFormData = (formData, key, value) => {
    if (formData.has(key)) {
        formData.delete(key);
    }

    formData.append(key, value);
    return formData;
}



const FormHelper = {
    GenerateFormData,
    IncludeKeyValueOnFormData
}

export default FormHelper;