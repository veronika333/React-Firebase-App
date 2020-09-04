
export default function validateCreateLink(values) {
    let errors = {}

    //Description errors
if(!values.description){
errors.description = "Description required";
} 
else if 
(values.description.length < 11)
{
    errors.description = "Description must be longer than 10 characters";
}
    //URL error
if (!values.url){
   errors.url = "URL required";
}
else if (!/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(values.url)) {
    errors.url = "Please provide a valid URL"
}
    //return errors object to send it back to handleSubmit in the hook useFormValid
    return errors;
}
