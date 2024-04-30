$(document).ready(function() {
    const specialists = [
        {
            name: 'Back-End Developer',
            levels: ['Junior', 'Middle', 'Senior']
        },
        {
            name: 'Front-End Developer',
            levels: ['Junior', 'Middle', 'Senior']
        },
        {
            name: 'Mobile Developer',
            levels: ['Junior', 'Middle', 'Senior']
        },
        {
            name: 'Testing Engineer',
            levels: ['Junior', 'Middle', 'Senior']
        },
        {
            name: 'QA Engineer',
            levels: ['Junior', 'Middle', 'Senior']
        },
        {
            name: 'UI/UX Designer',
            levels: ['Junior', 'Middle', 'Senior']
        },
        {
            name: 'Project Manager',
            levels: ['Junior', 'Middle', 'Senior']
        },
        {
            name: 'Solution Architect',
            levels: ['Junior', 'Middle', 'Senior']
        },
        {
            name: 'DevOps Engineer',
            levels: ['Junior', 'Middle', 'Senior']
        },
    ];
    let carousel =  $('.carousel-item');
    let currentIndex = 0;
    const totalItems = carousel.length;

    carousel.not(':first').hide();

    carousel.css('min-height', $('.carousel-item.active').height());

    $('.carousel-control-next').click(function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            carousel.eq(currentIndex - 1).fadeOut('fast');
            carousel.eq(currentIndex).fadeIn('fast');

            let newHeight = carousel.eq(currentIndex).height();

            $('.carousel-inner').animate({ height: newHeight }, 'fast');
        }
        updateControlButtons();
    });

    $('.carousel-control-prev').click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            carousel.eq(currentIndex + 1).fadeOut('fast');
            carousel.eq(currentIndex).fadeIn('fast');

            let newHeight = $('.carousel-item').eq(currentIndex).height();

            $('.carousel-inner').animate({ height: newHeight }, 'fast');
        }
        updateControlButtons();
    });

    // Проверка индекса текущего слайда и изменение кнопок управления
    function updateControlButtons() {
        if (currentIndex === 0) {
            // Если первый слайд, скрываем кнопку prev и показываем next
            $('.carousel-control-prev').hide();
            $('.carousel-control-next').show();
        } else if (currentIndex === totalItems - 1) {
            // Если последний слайд, скрываем кнопку next и показываем кнопку отправки
            $('.carousel-control-next').hide();
            $('.carousel-send-button').show();
        } else {
            // Иначе, показываем обе кнопки
            $('.carousel-control-prev').show();
            $('.carousel-control-next').show();
            $('.carousel-send-button').hide();
        }
    }

    updateControlButtons(); // Вызываем функцию для первоначальной установки кнопок управления

    // Обработчик события отправки формы
    $('#myForm').on('submit', function(event) {
        event.preventDefault();

        // Здесь можно получить все данные из формы
        let formData = $(this).serializeArray();
        console.log(formData);

        // Теперь вы можете отправить данные на сервер или выполнить другие действия с ними
    });

    const $specialistSelect = $('.specialist-select');
    const $levelSelect = $('.level-select');

    $.each(specialists, function(index, specialist) {
        $specialistSelect.append($('<option>', {
            value: specialist.name,
            text: specialist.name
        }));
    });

    // Обновление селекта "Уровень" в зависимости от выбранного специалиста
    $specialistSelect.on('change', function() {
        const selectedSpecialist = specialists.find(specialist => specialist.name === $(this).val());
        const $relatedLevelSelect = $(this).closest('tr').find('.level-select');
        $relatedLevelSelect.empty();
        $.each(selectedSpecialist.levels, function(index, level) {
            $relatedLevelSelect.append($('<option>', {
                value: level,
                text: level
            }));
        });
    });

    // Инициализация селекта "Уровень" при загрузке страницы
    const initialSpecialist = specialists[0];
    const $initialLevelSelect = $('.level-select').first();
    $.each(initialSpecialist.levels, function(index, level) {
        $initialLevelSelect.append($('<option>', {
            value: level,
            text: level
        }));
    });

    // Обработчик добавления записи
    $('.add-record-btn').click(function () {

        let selectedSpecialists = $('.specialist-select').map(function() {
            return $(this).val();
        }).get();

        let unselectedSpecialist = specialists.find(function(specialist) {
            return !selectedSpecialists.includes(specialist.name);
        });

        if (!unselectedSpecialist) {
            unselectedSpecialist = specialists[0];
        }

        let lastRow = $('.carousel-item-select-content table tbody tr:last');

        let newRow = lastRow.clone();

        newRow.find('select').val('');
        newRow.find('input[type="number"]').val('');

        newRow.find('.specialist-select').val(unselectedSpecialist.name);

        newRow.find('.specialist-select').on('change', function() {
            const selectedSpecialist = specialists.find(specialist => specialist.name === $(this).val());
            const relatedLevelSelect = $(this).closest('tr').find('.level-select');
            relatedLevelSelect.empty();
            $.each(selectedSpecialist.levels, function(index, level) {
                relatedLevelSelect.append($('<option>', {
                    value: level,
                    text: level
                }));
            });
        });

        // Обновляем селектор "Уровень" в соответствии с выбранным значением "Специалист"
        let selectedSpecialistData = specialists.find(specialist => specialist.name === unselectedSpecialist.name);
        let relatedLevelSelect = newRow.find('.level-select');
        relatedLevelSelect.empty();
        $.each(selectedSpecialistData.levels, function(index, level) {
            relatedLevelSelect.append($('<option>', {
                value: level,
                text: level
            }));
        });

        $('.carousel-item-select-content table tbody').append(newRow);

        let newHeight = $('.carousel-item').eq(currentIndex).height();
        $('.carousel-inner').animate({ height: newHeight }, 'fast');
    });
});
