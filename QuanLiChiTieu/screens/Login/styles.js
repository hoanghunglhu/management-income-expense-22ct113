import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginBottom: 12,
  },
  errorText: {
    width: '100%',
    color: 'red',
    marginBottom: 8,
  },
  button: {
    width: '100%',
    backgroundColor: '#1e88e5',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  passwordContainer: {
    width: '100%',
  },
  passwordInputWrapper: {
    flexDirection: 'row', 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
  },
  messageBox: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  errorBox: {
    backgroundColor: '#ffdddd',
    borderColor: '#ff0000',
    borderWidth: 1,
  },
  successBox: {
    backgroundColor: '#ddffdd',
    borderColor: '#00cc00',
    borderWidth: 1,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default styles;