import { useState, useEffect, useCallback } from 'react';

export function useProfile() {
    const [name, setName] = useState("Pokemon collector1293");
    const [description, setDescription] = useState("Описание отсутствует.");
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProfile = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const savedName = localStorage.getItem("profileName");
            if (savedName) {
                setName(savedName);
            }

            const savedDescription = localStorage.getItem("profileDescription");
            if (savedDescription) {
                setDescription(savedDescription);
            }
        } catch (err) {
            console.error('Ошибка загрузки:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    function onChangeName(value) {
        console.log(value)
        setName(value);
    }

    function onChangeDescription(value) {
        setDescription(value);
    }

    function onChangeIsEditable() {
        setIsEditing(prev => !prev);
    }

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    function saveProfile() {
        localStorage.setItem("profileName", name);
        localStorage.setItem("profileDescription", description);
        setIsEditing(false);
    };

    return {
        name,
        description,
        loading,
        error,
        isEditing,
        saveProfile,
        refresh: fetchProfile,
        onChangeDescription,
        onChangeName,
        onChangeIsEditable
    };
}