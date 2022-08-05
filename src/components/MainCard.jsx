import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

const MainCard = () => {
	const [changeUser, setChangeUser] = useState(true);
	const [user, setUser] = useState({});

	useEffect(() => {
		const URL = 'https://randomuser.me/api/';
		axios
			.get(URL)
			.then((res) => setUser(res.data.results[0]))
			.catch((err) => console.log(err, data));
	}, [changeUser]);

	const changeUserClick = () => {
		setChangeUser(!changeUser);
	};

	return (
		<div>
			<div className="card">
				<img src={user.picture?.medium} alt="" />
				<h1>
					Hello, my name is
					{` ${user.name?.title} ${user.name?.first} ${user.name?.last}`}
				</h1>
				<div className="card__mainInfo">
					<p>
						<b>Gender: </b>
						{user.gender}
					</p>
					<p>
						<b>age: </b> {user.dob?.age}
					</p>
					<p>
						<b>Phone: </b> {user.phone}
					</p>
					<p>
						<b>email: </b>
						{user.email}
					</p>
					<p>
						<b>Address: </b>
						{` ${user.location?.city}, ${user.location?.street.name}, ${user.location?.street.number}, ${user.location?.country}. `}
					</p>
				</div>
				<button onClick={changeUserClick}> Change User</button>
			</div>
		</div>
	);
};

export default MainCard;
