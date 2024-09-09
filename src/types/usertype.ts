export type userDetailType = {
    username : string,
    email : string,
    password : string,
    otp : string,
    otpExpiry : Date,
    isVerified : boolean,
    followers  : string[],
    following : string[],
    
}