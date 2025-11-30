/**
 * Utility functions for LCA Dashboard
 */

const Utils = {
    /**
     * Format a number with specified decimal places
     * @param {number} num - Number to format
     * @param {number} decimals - Number of decimal places
     * @returns {string} - Formatted number string
     */
    formatNumber: function(num, decimals) {
        return num.toFixed(decimals);
    },

    /**
     * Generate a unique ID
     * @returns {string} - Unique identifier
     */
    generateId: function() {
        return 'id_' + Math.random().toString(36).substring(2, 11);
    }
};
