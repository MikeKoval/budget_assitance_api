/* istanbul ignore next */
function renderMailBody(address, user, hash) {
	return `<div>
				<p>Username: ${user.username}</p>
				<p>Name: ${user.name}</p>
				<p>Nickname: ${user.nickname}</p>
				<p>Email: ${user.email}</p>
				<p>Phone number: ${user.phone_number}</p>
				<p>Wants to become TA. <a href="${address}api/ta-request/confirm/${hash}">Confirm</a>
				<a href="${address}api/ta-request/decline/${hash}">Decline</a></p>
		</div>`;
}
/* istanbul ignore next */
export default function createTAConfirmationMail(address, user, hash, { from, to }) {
	return {
		from,
		to,
		subject: 'Become TA request',
		html: renderMailBody(address, user, hash)
	};
}
