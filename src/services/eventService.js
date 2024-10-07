const API_URL = process.env.REACT_APP_API_URL;

export const getEvents = async () => {
    try {
      const response = await fetch(API_URL);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.length ? data : [];
    } catch (error) {
      return [];
    }
  };

export const createEvent = async (event) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
};

export const updateEvent = async (id, event) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });
};

export const deleteEvent = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
