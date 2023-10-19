import toast from "react-hot-toast"

function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username Required")
    } else if (values.username.includes(' ')) {
        error.username = toast.error('Invalid username')
    }
    return error
}

export async function usernameValidate(values) {
    const error = usernameVerify({}, values)

    return error
}

/***********************************************************/


function passwordVerify(errors = {}, values) {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        errors.password = toast.error('Password required')
    } else if (values.password.includes(' ')) {
        errors.password = toast.error("Wrong Password")
    } else if (values.password.length < 4) {
        errors.password = toast.error("Password must be more than 4 character long")
    } else if (!specialChars.test(values.password)) {
        errors.password = toast.error("Password must have special character")
    }
    return errors
}

export async function passwordValiate(values) {
    const errors = passwordVerify({}, values)
    return errors
}

/***********************************************************/



export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values)
    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error('Password not match')
    }
    return errors
}