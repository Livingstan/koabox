/**
 * Authenticate the user and generate the token.
 * have to validate the user form the database
 * 
 */

export const auth = async(ctx, next) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;

    if (username === "user" && password === "pwd") {
        ctx.body = {
            token: jwt.issue({
                user: "user",
                role: "admin"
            })
        }
    } else {
        ctx.status = 401;
        ctx.body = {
            error: "Invalid login"
        }
    }
}

export default auth;