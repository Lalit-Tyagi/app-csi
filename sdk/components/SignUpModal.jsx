import { Button, Dialog, TextField } from '@mui/material'
import styles from '../../styles/loginModal.module.scss'
export const SignUpModal = (props) => {
  return (
    <Dialog fullScreen className={styles.modal} {...props}>
      <div>
        <div className={styles.logo}>
          <img src='/assets/icons/logo.svg' alt='' />
        </div>
      </div>
      <div className={styles.formContainer}>
        <h1>Sign Up</h1>
        <form>
          <TextField id='Name' label='Name' type='text' variant='standard' />
          <TextField id='email' label='Email' type='text' variant='standard' />
          <TextField
            id='paswword'
            label='Password'
            type='text'
            variant='standard'
          />
          <TextField
            id='confirmPaswword'
            label='Confirm Password'
            type='text'
            variant='standard'
          />
          <a>I am already a Member</a>
          <Button variant='contained'>Sign Up</Button>
        </form>
      </div>
    </Dialog>
  )
}
