const isLogedin=()=>{
    if (window === undefined) {
        return false
    }
    if(window?.localStorage?.getItem('token')!=='') {
        return true
    }
    return false
}