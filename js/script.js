document.addEventListener("DOMContentLoaded", function() {
    var depLinks = document.querySelectorAll(".dep-bt");
    var subs = document.querySelectorAll(".sub");
  
    depLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작을 막습니다.
  
        // 모든 sub 요소를 숨깁니다.
        subs.forEach(function(sub) {
          sub.style.display = "none";
        });
  
        // 클릭한 dep-bt에 해당하는 sub를 보여줍니다.
        var parentLi = this.parentElement;
        var sub = parentLi.querySelector(".sub");
        sub.style.display = "block";
      });
    });
  
    // 다른 곳을 클릭했을 때 모든 sub를 숨깁니다.
    document.addEventListener("click", function(event) {
      if (!event.target.classList.contains("dep-bt")) {
        subs.forEach(function(sub) {
          sub.style.display = "none";
        });
      }
    });
  });



/* //////////////////////  섹션1 탑 버튼*/

const start = 0;
const end = 58060110;
const duration = 1500; // 2초
const fps = 60; // 초당 프레임수
let current = start;
let frameIncrement;

function updateCounter() {
  const counterElement = document.getElementById('counter');
  counterElement.textContent = Math.round(current).toLocaleString(); // 현재값을 반올림하여 정수로 변환 후 쉼표 추가
  if (current < end) {
    current += frameIncrement;
    requestAnimationFrame(updateCounter); // 다음 프레임 요청
  }
}

function startCounter() {
  frameIncrement = (end - start) / (duration / 1000 * fps); // 프레임당 증가량 계산
  current = start;
  updateCounter(); // 카운터 시작
}

function showPage(pageId) {
  const page1 = document.querySelector('.s1top1');
  const page2 = document.querySelector('.s1top2');
  const button1 = document.querySelector('.s1t-bts .s1t-bt:nth-child(1)');
  const button2 = document.querySelector('.s1t-bts .s1t-bt:nth-child(2)');
  const page3 = document.querySelector('.s1md1');
  const page4 = document.querySelector('.s1md2');
  const page5 = document.querySelector('.s1md3');
  const button3 = document.querySelector('.s1m-bts .s1m-bt:nth-child(1)');
  const button4 = document.querySelector('.s1m-bts .s1m-bt:nth-child(2)');
  const button5 = document.querySelector('.s1m-bts .s1m-bt:nth-child(3)');

  if (pageId === 's1top1') {
    page1.style.display = 'flex'; // 페이지 보이기
    page2.style.display = 'none'; // 다른 페이지 숨기기
    button1.style.width = '24px'; // 클릭된 버튼의 넓이를 2배로 변경
    button2.style.width = '8px'; // 다른 버튼의 넓이를 원래대로 변경
    button1.style.backgroundColor = 'black'; // 클릭된 버튼의 배경색을 검은색으로 변경
    button2.style.backgroundColor = ''; // 다른 버튼의 배경색을 초기화
    startCounter(); // 카운터 시작
  } else if (pageId === 's1top2') {
    page1.style.display = 'none';
    page2.style.display = 'flex';
    button1.style.width = '8px';
    button2.style.width = '24px';
    button1.style.backgroundColor = ''; // 다른 버튼의 배경색을 초기화
    button2.style.backgroundColor = 'black'; // 클릭된 버튼의 배경색을 검은색으로 변경
  }
  if (pageId === 's1md1') {
    page3.style.display = 'inline-block'; // 페이지 보이기
    page4.style.display = 'none'; // 다른 페이지 숨기기
    page5.style.display = 'none'; // 다른 페이지 숨기기
    button3.style.width = '24px'; // 클릭된 버튼의 넓이를 2배로 변경
    button4.style.width = '8px'; // 다른 버튼의 넓이를 원래대로 변경
    button5.style.width = '8px'; // 다른 버튼의 넓이를 원래대로 변경
    button3.style.backgroundColor = 'black'; // 클릭된 버튼의 배경색을 검은색으로 변경
    button4.style.backgroundColor = ''; // 다른 버튼의 배경색을 초기화
    button5.style.backgroundColor = ''; // 다른 버튼의 배경색을 초기화
  } else if (pageId === 's1md2') {
    page3.style.display = 'none';
    page4.style.display = 'inline-block';
    page5.style.display = 'none'; // 다른 페이지 숨기기
    button3.style.width = '8px';
    button4.style.width = '24px';
    button5.style.width = '8px'; // 다른 버튼의 넓이를 원래대로 변경
    button3.style.backgroundColor = ''; // 다른 버튼의 배경색을 초기화
    button4.style.backgroundColor = 'black'; // 클릭된 버튼의 배경색을 검은색으로 변경
    button5.style.backgroundColor = ''; // 다른 버튼의 배경색을 초기화
  } else if (pageId === 's1md3') {
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'inline-block'; // 페이지 보이기
    button3.style.width = '8px';
    button4.style.width = '8px';
    button5.style.width = '24px'; // 클릭된 버튼의 넓이를 2배로 변경
    button3.style.backgroundColor = ''; // 다른 버튼의 배경색을 초기화
    button4.style.backgroundColor = ''; // 다른 버튼의 배경색을 초기화
    button5.style.backgroundColor = 'black'; // 클릭된 버튼의 배경색을 검은색으로 변경
  }
}

// 페이지 로드시 첫 번째 페이지의 카운터 시작
document.addEventListener('DOMContentLoaded', function() {
  startCounter();
});







/* 섹션1 아래 슬라이드 */
const slider = document.querySelector('.s1r-slick-list');
const prevButton = document.querySelector('.slick-prev');
const nextButton = document.querySelector('.slick-next');

let currentIndex = 0;

prevButton.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length; // 이전 페이지 인덱스 계산
  updateSlider();
});

nextButton.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % slider.children.length; // 다음 페이지 인덱스 계산
  updateSlider();
});

function updateSlider() {
  const slideWidth = slider.children[0].offsetWidth;
  const offset = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;

  // 현재 페이지가 s1r-bt3일 때만 배경 추가
  const currentSlide = slider.children[currentIndex];
  if (currentSlide.classList.contains('s1r-bt3')) {
    currentSlide.style.position = 'relative'; // 부모 요소에 position: relative; 추가
    currentSlide.style.overflow = 'hidden'; // 내용이 요소를 넘어가지 않도록 overflow: hidden; 설정
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    currentSlide.appendChild(overlay);
  } else {
    const overlay = currentSlide.querySelector('.overlay');
    if (overlay) {
      overlay.remove(); // s1r-bt3이 아닌 경우 overlay 요소 삭제
    }
  }
}



/* 섹션2 버튼 */
const button = document.querySelector('.s2-topbutton');
const backgrounds = [
  'url("./img/s2-bt.svg")',
  'url("./img/s2-bt2.svg")'
  // 다른 이미지 경로들을 추가할 수 있습니다
];

// 현재 백그라운드 이미지의 인덱스를 저장하는 변수
let currentBackgroundIndex = 0;
let isSliderPaused = false;

// 버튼 클릭 이벤트 리스너 추가
button.addEventListener('click', function() {
  // 이미지 변경
  button.style.backgroundImage = backgrounds[currentBackgroundIndex];
  
  // 이미지가 'url("./img/s2-bt.svg")'일 경우 슬라이드 멈춤
  if (currentBackgroundIndex === 0) {
    isSliderPaused = true;
  } else {
    isSliderPaused = false;
  }

  // 다음 이미지로 이동
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
});

/* 섹션2 슬라이드 */

// 요소와 애니메이션 속도 정의
const sliderElement = document.querySelector('.s2_bottom ul');
const slideSpeed = 1; // 슬라이드 속도 (숫자가 클수록 더 빠름)

// 초기화
let currentPosition = 0;
let animationFrame;

// 마우스 오버 이벤트 리스너 추가
sliderElement.addEventListener('mouseover', function() {
  isSliderPaused = true;
  // 이미지 변경
  button.style.backgroundImage = backgrounds[0];
});

// 마우스 아웃 이벤트 리스너 추가
sliderElement.addEventListener('mouseout', function() {
  isSliderPaused = false;
  // 이미지 변경
  button.style.backgroundImage = backgrounds[1];
});

// 애니메이션 실행 함수
function slide() {
  if (!isSliderPaused) {
    currentPosition -= slideSpeed;
    sliderElement.style.transform = `translateX(${currentPosition}px)`;

    // 첫 번째 슬라이드가 왼쪽 끝으로 이동하면, 다음 슬라이드를 바로 뒤에 이어서 보여줌
    if (currentPosition <= -sliderElement.children[0].offsetWidth) {
      currentPosition += sliderElement.children[0].offsetWidth;
      sliderElement.appendChild(sliderElement.children[0]);
      sliderElement.style.transform = `translateX(${currentPosition}px)`;
    }
  }

  // 다음 프레임 요청
  animationFrame = requestAnimationFrame(slide);
}

// 초기에 애니메이션 시작
slide();



document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".ft-bt > ul > li > a");

  links.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // 링크의 기본 동작 방지

      // 현재 클릭된 링크의 부모 요소(li)에서 active 클래스를 토글합니다.
      const parentLi = link.parentNode;
      parentLi.classList.toggle("active");

      // 애니메이션을 위해 0.5초 동안 부드러운 전환 효과를 적용합니다.
      setTimeout(function() {
        parentLi.style.transition = "border-top 0.5s ease";
      }, 0);
    });
  });

  // 통일부 관련 누리집을 클릭했을 때 실행할 함수를 정의합니다.
  const toggler = document.querySelectorAll('a[href="javascript:void(0);"]');
  toggler.forEach(function(toggle) {
    toggle.addEventListener("click", function() {
      // 클릭된 요소의 다음 형제 요소인 div.show-box1을 찾아서 해당 요소가 슬라이드 업되도록 합니다.
      const showBox = toggle.nextElementSibling;
      if (showBox) {
        if (showBox.style.display === "none") {
          showBox.style.display = "block";
        } else {
          showBox.style.display = "none";
        }
      }

      // 클릭된 요소의 부모 요소인 li가 활성화 클래스인 'on'을 갖도록 토글링합니다.
      const parentLi = toggle.parentNode;
      parentLi.classList.toggle("on");

      // 클릭된 요소의 부모 요소인 li에 'on' 클래스가 있는지 확인합니다.
      if (parentLi.classList.contains("on")) {
        // 활성화된 li 요소를 현재 위치로 이동합니다.
        const parentUl = toggle.closest(".ft-bottom").querySelector("ul");
        parentUl.insertBefore(parentLi, parentUl.firstChild);
      }

      // 클릭된 요소의 부모 요소인 li의 형제 요소들의 위쪽 보더를 0으로 설정합니다.
      const siblings = parentLi.parentNode.children;
      for (const sibling of siblings) {
        if (sibling !== parentLi) {
          sibling.classList.remove("on");
        }
      }
    });
  });
});







document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const slides = document.querySelectorAll(".s4-topbox");

  let currentSlideIndex = 0;

  // 초기에 첫 번째 슬라이드만 보이도록 설정
  slides[currentSlideIndex].classList.add("active");

  // 이전 버튼 클릭 이벤트 리스너
  prevButton.addEventListener("click", function() {
    // 현재 활성화된 슬라이드를 비활성화
    slides[currentSlideIndex].classList.remove("active");
    // 다음 슬라이드로 이동
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    // 다음 슬라이드를 활성화
    slides[currentSlideIndex].classList.add("active");
  });

  // 다음 버튼 클릭 이벤트 리스너
  nextButton.addEventListener("click", function() {
    // 현재 활성화된 슬라이드를 비활성화
    slides[currentSlideIndex].classList.remove("active");
    // 다음 슬라이드로 이동
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    // 다음 슬라이드를 활성화
    slides[currentSlideIndex].classList.add("active");
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // 현재 창의 넓이를 가져옵니다.
  const windowWidth = window.innerWidth;

  // 창의 넓이가 1050픽셀 이하인 경우에만 스크립트를 실행합니다.
  if (windowWidth <= 1050) {
    const strongElements = document.querySelectorAll(".etc-service strong");

    // 각 strong 요소에 대해 이벤트 리스너를 추가합니다.
    strongElements.forEach(function(strongElement) {
      // strong 요소를 클릭할 때마다 인접한 ul 요소의 표시 여부를 토글합니다.
      strongElement.addEventListener("click", function() {
        const ulElement = strongElement.nextElementSibling;
        if (ulElement.style.display === "block") {
          ulElement.style.display = "none";
        } else {
          ulElement.style.display = "block";
        }
      });
    });
  }
});





/* 햄버거메뉴 */
document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const closeButton = document.querySelector('.close-button'); // 닫기 버튼 추가

  hamburger.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
    document.body.classList.toggle('hamburger-menu-open'); // body에 클래스 추가/제거
  });

  closeButton.addEventListener('click', function(event) { // 닫기 버튼에 클릭 이벤트 추가
    event.stopPropagation(); // 이벤트 전파 방지
    hamburgerMenu.classList.remove('active');
    document.body.classList.remove('hamburger-menu-open'); // body에 클래스 제거
  });

  hamburgerMenu.addEventListener('click', function(event) {
    event.stopPropagation(); // 햄버거 메뉴 클릭 시 이벤트 전파 방지
  });

  document.addEventListener('click', function(event) {
    const targetElement = event.target; // 클릭한 요소

    if (!targetElement.closest('.hamburger')) {
      hamburgerMenu.classList.remove('active'); // 햄버거 메뉴 이외의 영역을 클릭한 경우 메뉴 닫기
      document.body.classList.remove('hamburger-menu-open'); // body에 클래스 제거
    }
  });

  const menuItems = document.querySelectorAll('.menu > ul > li');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const subMenu = this.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.classList.toggle('active');
      }
    });
  });
});

/* 검색 */
document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById('searchButton');
  const searchMenu = document.querySelector('.search-menu');
  const closeButton = document.querySelector('.sh-close-button');
  const mainContent = document.querySelector('main');

  searchButton.addEventListener('click', function() {
      searchMenu.classList.toggle('active');
      mainContent.classList.toggle('blur');
  });

  closeButton.addEventListener('click', function() {
      searchMenu.classList.remove('active');
      mainContent.classList.remove('blur');
  });
});