export const htmlNewUserTemplate = (id, date) => {
    return `
    <h2>Nueva alta de usuario</h2>
    <p>Se ha dado de alta un nuevo usuario:</p>
    <ul>
        <li><strong>UUID:</strong> ${id}</li>
        <li><strong>FECHA:</strong> ${date}</li>
    </ul>
    `
};