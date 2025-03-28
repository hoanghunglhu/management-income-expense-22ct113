import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161B22",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1F242B",
    color: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  datePicker: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F242B",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  dateText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  noteInput: {
    backgroundColor: "#1F242B",
    color: "white",
    padding: 15,
    borderRadius: 10,
    height: 100,
    textAlignVertical: "top",
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#FF0000",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#3D5AFE",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
