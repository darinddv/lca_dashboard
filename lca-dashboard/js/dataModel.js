/**
 * Data model for LCA Dashboard
 * Handles data loading and management
 */

const DataModel = {
    data: null,

    /**
     * Load data from JSON file
     * @param {string} url - URL to the data file
     * @returns {Promise} - Promise resolving to the loaded data
     */
    loadData: async function(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error('Error loading data:', error);
            throw error;
        }
    }
};
