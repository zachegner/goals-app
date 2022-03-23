import axios from 'axios'

const API_URL = '/api/goals/'

// Create New Goal
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, goalData, config)

    return response.data
}

// Get User Goals
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}
/*
// Update Goal
const updateGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(API_URL + ':id', goalData, config)

    if (response.data) {
        localStorage.setItem('goal', JSON.stringify(response.data))
    }

    return response.data
}

// Delete Goal
const del = () => {
    localStorage.removeItem('goal')
}*/

const goalService = {
    createGoal,
    getGoals,
    //updateGoal,
    //deleteGoal,
}

export default goalService 