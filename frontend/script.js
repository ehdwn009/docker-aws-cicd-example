// frontend/script.js

// HTML에서 id가 'fetchDataButton'인 버튼 요소를 찾습니다.
const fetchDataButton = document.getElementById('fetchDataButton');
// HTML에서 id가 'dataContainer'인 div 요소를 찾습니다.
const dataContainer = document.getElementById('dataContainer');

// 버튼이 클릭되었을 때 실행될 함수를 정의합니다.
fetchDataButton.addEventListener('click', async () => {
    try {
        const response = await fetch('http://13.239.225.31:3001/api/data');

        // 응답이 성공적이지 않으면 오류를 발생시킵니다.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 응답 본문을 JSON 형태로 파싱합니다.
        const data = await response.json();

        // dataContainer의 내용을 백엔드에서 받은 데이터로 채웁니다.
        dataContainer.innerHTML = `
            <p><strong>메시지:</strong> ${data.message}</p>
            <p><strong>타임스탬프:</strong> ${new Date(data.timestamp).toLocaleString('ko-KR')}</p>
        `;
    } catch (error) {
        // 오류 발생 시 dataContainer에 오류 메시지를 표시합니다.
        console.error('Fetch error:', error);
        dataContainer.innerHTML = `<p style="color: red;">데이터를 가져오는 데 실패했습니다: ${error.message}</p>`;
    }
});