import styles from './pagination.module.css';

function Pagination({
    currentPage,
    totalPages,
    loading,
    onPageChange,
    onPrevPage,
    onNextPage,
    isFirstPage,
    isLastPage
}) {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 0; i < totalPages; i++) {
                pages.push(i);
            }
        } else {
            let start = Math.max(0, currentPage - 2);
            let end = Math.min(totalPages, start + maxVisiblePages);

            if (end - start < maxVisiblePages) {
                start = Math.max(0, end - maxVisiblePages);
            }

            for (let i = start; i < end; i++) {
                pages.push(i);
            }
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className={styles.pagination}>
            <div className={styles.controls}>
                <button
                    onClick={onPrevPage}
                    disabled={loading || isFirstPage}
                    className={`${styles.navButton} ${(loading || isFirstPage) ? styles.disabled : ''}`}
                >
                    ← Назад
                </button>

                <div className={styles.pageNumbers}>
                    {currentPage > 2 &&
                        <>
                            <button
                                onClick={() => onPageChange(0)}
                                disabled={loading}
                                className={`
                                ${styles.pageButton} 
                                ${loading ? styles.disabled : ''}
                            `}
                            >
                                1
                            </button>
                            {currentPage > 3 && <span className={styles.pageDots}>...</span>}

                        </>
                    }
                    {pages.map(pageNum => (
                        <button
                            key={pageNum}
                            onClick={() => onPageChange(pageNum)}
                            disabled={loading}
                            className={`
                                ${styles.pageButton} 
                                ${currentPage === pageNum ? styles.active : ''} 
                                ${loading ? styles.disabled : ''}
                            `}
                        >
                            {pageNum + 1}
                        </button>

                    )
                    )}
                    {totalPages > 5 && currentPage < totalPages - 3 && (
                        <>
                            <span className={styles.pageDots}>...</span>
                            <button
                                onClick={() => onPageChange(totalPages - 1)}
                                disabled={loading}
                                className={`${styles.pageButton} ${loading ? styles.disabled : ''}`}
                            >
                                {totalPages}
                            </button>
                        </>
                    )}
                </div>

                <button
                    onClick={onNextPage}
                    disabled={loading || isLastPage}
                    className={`${styles.navButton} ${(loading || isLastPage) ? styles.disabled : ''}`}
                >
                    Вперёд →
                </button>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.pageInfo}>
                    <span className={styles.currentPage}>{currentPage + 1}</span>
                    <span className={styles.totalPages}> из {totalPages} страниц</span>
                    {loading && <span className={styles.loadingIndicator}> • Загрузка</span>}
                </div>
            </div>
        </div>
    );
}

export default Pagination;