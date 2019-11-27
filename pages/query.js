import React, {useState, useEffect} from 'react';

const Query = () => {
  const [hasError, setErrors] = useState(false);
  const [jobs, setJobs] = useState({});

  const gqlQ = `{
  jobs {
    title
    company {
      name
    }
    cities {
      name
    }
  }
}`;

  async function fetchData() {
    const res = await fetch('https://api.graphql.jobs', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: gqlQ})
    });

    res
      .json()
      .then(res => setJobs(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return <code>{JSON.stringify(jobs)}</code>;
};

export default Query;
