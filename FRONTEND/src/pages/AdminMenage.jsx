import React, { useState } from 'react';

const AdminDashboardForm = () => {
    const [formData, setFormData] = useState({
        totalVisitors: '',
        departmentActivity: '',
        searchRecords: '',
        logs: '',
        completionStatus: '',
        historyLogging: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (send data to backend)
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Total Visitors</label>
                <input
                    type="number"
                    name="totalVisitors"
                    value={formData.totalVisitors}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Enter total visitors"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Department Activity</label>
                <textarea
                    name="departmentActivity"
                    value={formData.departmentActivity}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    placeholder="Enter department activity"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Search Records</label>
                <textarea
                    name="searchRecords"
                    value={formData.searchRecords}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    placeholder="Enter search records"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Logs</label>
                <textarea
                    name="logs"
                    value={formData.logs}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    placeholder="Enter logs"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">Completion Status</label>
                <input
                    type="text"
                    name="completionStatus"
                    value={formData.completionStatus}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Enter completion status"
                />
            </div>
            <div>
                <label className="block text-sm font-medium">History Logging</label>
                <textarea
                    name="historyLogging"
                    value={formData.historyLogging}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    placeholder="Enter history logging"
                />
            </div>
            <div className="flex justify-end">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    );
};

export default AdminDashboardForm;
