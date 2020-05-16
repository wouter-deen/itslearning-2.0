import * as contentful from 'contentful';

const SPACE_ID = 'se02rp9qe0mu';
const ACCESS_TOKEN = 'Yz-nEg-RlkHTI65vtGaZ0_vbilruFFnxusgH39rwiBc';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

export default client