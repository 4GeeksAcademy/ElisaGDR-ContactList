const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			demo: [
				{
					contact: "George Harrison",
					agenda: "Beatles",
					status: "post",
					direction: "Strawberry Fields st, 6",
					mobile_number: "69665325",
					email: "namaste@gmail.com"
				},
				{
					contact: "John Lennon",
					agenda: "Beatles",
					status: "post",
					direction: "Abbey Road, 4",
					mobile_number: "65965325",
					email: "johnnypeace@gmail.com"

				},
				{
					contact: "Ringo Starr",
					agenda: "Beatles",
					status: "post",
					direction: "Octopus Garden st, 9",
					mobile_number: "65941325",
					email: "imthedrummer@gmail.com"
				},
				{
					contact: "Paul McCartney",
					agenda: "Beatles",
					status: "post",
					direction: "Eleanor Rigby, 7",
					mobile_number: "652235325",
					email: "paulpaul@gmail.com"
				}
			]
		},
		actions: {

			getUsers: async () => {
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda/ElisaGarcia";
				const options = {
					method: "GET",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					setStore({ users: data });
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			postUsers: async (newContact) => {
				const url = "https://playground.4geeks.com/apis/fake/contact";
				const options = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(newContact)
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					getActions().getUsers();				
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			putUsers: async (id, updatedUser) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
				const options = {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedUser)
				};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					getActions().getUsers();
					getActions().updateContactInStore(id, updatedUser);
					//const newData = [data];
					//setStore({users: newData});

				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			},

			updateContactInStore: (id, updatedContact) => {
				const store = getStore();
				const updatedUsers = store.users.map(user =>
					user.id === id ? { ...user, ...updatedContact } : user
				);
				setStore({ users: updatedUsers });
			},

			deleteUsers: async (id) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
				const options = {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				};
				const response = await fetch(url, options);
				if (response.ok) {
				    const data = await response.json();
					getActions().getUsers();
				    console.log(data);
				
					{/*const newUsers = getStore().users.filter(item => item.id !== id);
				    setStore({ users: newUsers });*/}
				
				} else {
					console.log("ERROR:", response.status, response.statusText);
				}
			}
		}
	}
};

export default getState;
