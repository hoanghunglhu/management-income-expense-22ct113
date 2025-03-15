import { StyleSheet } from 'react-native';

const COLORS = {
  primary: '#1e88e5', // Màu chính của nút
  error: '#ff0000',
  success: '#00cc00',
  background: '#fff',
  border: '#ccc',
  inputBackground: '#f9f9f9',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.inputBackground,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    width: '100%',
    color: COLORS.error,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 3, // Hiệu ứng đổ bóng trên Android
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
    backgroundColor: COLORS.inputBackground,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  messageBox: {
    width: '100%',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  errorBox: {
    backgroundColor: '#ffebeb',
    borderColor: COLORS.error,
    borderWidth: 1,
  },
  successBox: {
    backgroundColor: '#e6ffe6',
    borderColor: COLORS.success,
    borderWidth: 1,
  },
  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
