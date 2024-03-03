const apiLink = 'http://localhost:3000/links';

export const addLink = async (url: string) => {
    try {
        const urlRegex = /^(https?):\/\/(www\.)?([a-zA-Z0-9\-.]+\.)([a-zA-Z0-9-.]+)\/([a-zA-z0-9/=%&]+)?$/

        if (!urlRegex.test(url)) {
            return null;
        }
        
        const response = await fetch(`${apiLink}/addlink`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });
        const result = await response.json();
        // console.log('Data posted successfully:', result);
        return result
    } catch (error) {
        console.error('Error posting data:', error);
    }
}

export const redirectLink = async (key: string) => {
    try {
        const response = await fetch('http://localhost:3000/links/getlink', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ key })
        });

        if (response.status !== 200) {
            return null;
        }

        return await response.json();
    } catch (error) {
        
    }
}