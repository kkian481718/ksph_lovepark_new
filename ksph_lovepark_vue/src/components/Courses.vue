<template>
    <!-- 課程 Portfolio Grid-->
    <section class="page-section bg-light" id="portfolio">
        <div class="container px-4 px-lg-0">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">課程與計畫介紹</h2>
                <h4 class="section-subheading text-muted">由團隊共同為學員擬定<br>適性的個別化教育計畫</h4>
                <hr class="divider" />
            </div>
            <div class="row">
                <!-- 情緒教育課程 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 1-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/1.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal1" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">情緒教育課程</div>
                                <div class="portfolio-caption-subheading text-muted">特殊需求</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- 社交技巧課程 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 2-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/2.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal2" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">社交技巧課程</div>
                                <div class="portfolio-caption-subheading text-muted">特殊需求</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- 學習策略課程 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 3-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/3.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal3" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">學習策略課程</div>
                                <div class="portfolio-caption-subheading text-muted">特殊需求</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- 生活管理課程 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 4-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/4.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal4" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">生活管理課程</div>
                                <div class="portfolio-caption-subheading text-muted">特殊需求</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- 職業教育課程 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 5-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/5.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal5" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">職業教育課程</div>
                                <div class="portfolio-caption-subheading text-muted">特殊需求</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- 動作機能訓練 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 6-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/6.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal6" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">動作機能訓練</div>
                                <div class="portfolio-caption-subheading text-muted">特殊需求</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- 高中職原校輔導 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 7-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal7">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/7.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal7" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">高中職端原校輔導</div>
                                <div class="portfolio-caption-subheading text-muted">個別輔導</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- IEP -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 8-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal8">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/8.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal8" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">IEP個別化教育計畫會議</div>
                                <div class="portfolio-caption-subheading text-muted">評估會議</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- 個案討論會：每週 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 9-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal9">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/9.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal9" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">個案討論會：每週</div>
                                <div class="portfolio-caption-subheading text-muted">追蹤會議</div>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- 個案討論會：每月 -->
                <div class="col-lg-3 col-6 mb-4">
                    <!-- Portfolio item 10-->
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal10">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="/assets/img/portfolio/10.jpg" alt="..." />
                        </a>
                        <a href="#portfolioModal10" data-bs-toggle="modal" class="text-dark">
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">個案討論會：每月</div>
                                <div class="portfolio-caption-subheading text-muted">追蹤會議</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 環境介紹 environment-->
    <section class="page-section bg-primary text-white" id="environment">
        <div class="container px-4">
            <h2 class="text-center">環境介紹：良好學習環境</h2>
            <hr class="divider divider-light mb-5" />
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
                        aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
                        aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
                        aria-label="Slide 9"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/img/environment_pic/environment_1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/environment_pic/environment_2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/environment_pic/environment_3.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/environment_pic/environment_4.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/environment_pic/environment_5.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/environment_pic/environment_6.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/environment_pic/environment_7.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/environment_pic/environment_8.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/img/environment_pic/environment_9.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>

    <!-- 情障定義 ebb-definition-->
    <section class="page-section bg-secondary" id="ebb-definition">
        <div class="container px-4">
            <div class="row justify-content-between">
                <div class="col-lg-6 col-md-12">
                    <h3 class="text-white mt-0 text-center">情緒行為障礙的定義</h3>
                    <hr class="divider divider-light" />
                    <div>
                        <p class="text-white">指情緒或行為反應長期顯著異常，甚而嚴重影響日常生活者。</p>
                        <p class="text-white">
                            通常會先考慮孩子是否已達某些疾病的診斷標準，例如：<br>
                            <strong>對立反抗性疾患、注意力缺陷過動症、自閉症、憂鬱症、躁鬱症、焦慮症、強迫症、行為規範障礙症、精神分裂症、學習障礙、智能障礙、適應障礙症、創傷後壓力症候群等等疾病。</strong><br><br>
                            或者孩子目前只是面臨一些困難不知如何解決，例如學業、人際等等問題，而需要介入協助。
                        </p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 gy-5 gy-lg-0">
                    <h3 class="text-white text-center">《身心障礙及資賦優異學生鑑定原則》</h3>
                    <hr class="divider divider-light" />
                    <div>
                        <p class="text-white">
                            我國現行的判定準則如下：<br><br>
                            <strong>
                                「情緒行為障礙，指<u>長期情緒或行為表現顯著異常，嚴重影響學校適應者</u>；其障礙非因智能、感官或健康等因素直接造成之結果。前項情緒行為障礙之症狀，包括精神性疾患、情感性疾患、畏懼性疾患、焦慮性疾患、注意力缺陷過動症、或有其他持續性之情緒或行為問題者。」<br>
                            </strong>
                        </p>
                        <div class="text-white">
                            第一項所定情緒行為障礙，其鑑定基準依下列各款規定：
                            <br><br>
                        <div class="row text-white noto-serif-tc-bold">
                            <p class="col-1">一、</p>
                            <p class="col">情緒或行為表現顯著異於其同年齡或社會文化之常態者，得參考精神科醫師之診斷認定之。</p>
                        </div>
                        <div class="row text-white noto-serif-tc-bold">
                            <p class="col-1">二、</p>
                            <p class="col">除學校外，在家庭、社區、社會或任一情境中顯現適應困難。</p>
                        </div>
                        <div class="row text-white noto-serif-tc-bold">
                            <p class="col-1">三、</p>
                            <p class="col">在學業、社會、人際、生活等適應有顯著困難，且經評估後確定一般教育所提供之介入，仍難獲得有效改善。</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-4 p-3 px-4 mt-5">
                <h5>▲ 因此如果發現孩子異於平常，不妨先找時間好好溝通，了解孩子面臨的困擾或問題</h5>
                <h5>▲ 如有需要，把握關鍵時間，盡快尋求專業的協助，相信家人及孩子定能一起度過困境</h5>
            </div>
        </div>
    </section>
    <!-- Portfolio item 1 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">情緒教育課程</h3>
                                <p class="item-intro text-muted">特殊需求</p>

                                <p>透過視覺化架構進行晤談分析與孩子共同思考如何解決他所遭遇的困難，訓練孩子自我覺察及情緒管理技巧。</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>教學者｜</strong>
                                        黃曉雯師 / 楊俊威師
                                    </li>
                                    <li>
                                        <strong>教學模式｜</strong>
                                        個別輔導 / 團體輔導
                                    </li>
                                </ul>

                                <img class="col img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_1.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 2 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">社交技巧課程</h3>
                                <p class="item-intro text-muted">特殊需求</p>

                                <p>
                                    透過簡單有趣的學習活動帶著孩子們認識、了解在團體活動中所需遵守之規範。
                                    在自然的活動過程中，教導孩子如何與他人相處，如何去臆測他人的想法，解決問題的策略或注意力反應靈敏度等，且可透過遊戲的方式讓孩子練習該如何適應環境中的挫折。
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>教學者｜</strong>
                                        黃曉雯師 / 楊俊威師
                                    </li>
                                    <li>
                                        <strong>教學模式｜</strong>
                                        團體輔導
                                    </li>
                                </ul>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_2.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 3 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">學習策略課程</h3>
                                <p class="item-intro text-muted">特殊需求</p>

                                <p>
                                    透過簡單有趣的桌遊及作業單練習，帶著個案親自操作訓練專注，在親手動手操作的活動過程中，教導個案聚焦在大小動作間的手眼協調，與如何運用自我控制的策略及自我調整專注。
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>教學者｜</strong>
                                        黃曉雯師
                                    </li>
                                    <li>
                                        <strong>教學模式｜</strong>
                                        團體輔導
                                    </li>
                                </ul>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_3.jpg" alt="..." />
                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_3a.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 4 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">生活管理課程</h3>
                                <p class="item-intro text-muted">特殊需求</p>

                                <p>
                                    透過簡易的家事訓練，帶著個案親自操作練習，在親手動手操作的活動過程中，教導個案基礎的餐飲技巧，與如何運用電鍋、烤箱、果汁機、電磁爐等做料理。
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>教學者｜</strong>
                                        黃曉雯師
                                    </li>
                                    <li>
                                        <strong>教學模式｜</strong>
                                        團體輔導
                                    </li>
                                </ul>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_4.jpg" alt="..." />
                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_4a.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 5 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">職業教育課程</h3>
                                <p class="item-intro text-muted">特殊需求</p>

                                <p>
                                    透過簡易的課程培養孩子適切的工作態度，習慣個人工作系統之操作，並讓他們從中操作中獲得充分的成就與興趣。
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>教學者｜</strong>
                                        黃曉雯師
                                    </li>
                                    <li>
                                        <strong>教學模式｜</strong>
                                        個別輔導 / 團體輔導
                                    </li>
                                </ul>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_5.jpg" alt="..." />
                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_5a.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 6 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">動作機能訓練</h3>
                                <p class="item-intro text-muted">特殊需求</p>

                                <p>
                                    透過簡易的課程培養孩子適切的工作態度，習慣個人工作系統之操作，並讓他們從中操作中獲得充分的成就與興趣。
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>教學者｜</strong>
                                        黃曉雯師
                                    </li>
                                    <li>
                                        <strong>教學模式｜</strong>
                                        個別輔導 / 團體輔導
                                    </li>
                                </ul>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_6.jpg" alt="..." />
                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_6a.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 7 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">高中職端原校輔導</h3>
                                <p class="item-intro text-muted">個別輔導</p>

                                <p>
                                    由高中職各校派請學校端輔導人員或教師至愛心園，教導孩子簡易課程，與孩子建立關係，了解孩子在院的服務狀態，以利協助未來順利回歸校園進行學習。
                                </p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>教學者｜</strong>
                                        學校端派請之輔導人員或教師
                                    </li>
                                    <li>
                                        <strong>教學模式｜</strong>
                                        個別輔導
                                    </li>
                                </ul>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_82.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 8 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal8" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">IEP個別化教育計畫及評估會議</h3>
                                <p class="item-intro text-muted">相關會議</p>

                                <p>
                                    接受新案轉介後，於入園前邀請原校教師及家長召開IEP會議評估個案情況，並完成初步評估報告送交督導教授評核。
                                </p>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_9.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 9 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal9" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">個案討論會：每週</h3>
                                <p class="item-intro text-muted">相關會議</p>

                                <p>
                                    每週由學生所屬各病房主治醫師定期召開個案討論會，讓教師及醫療團隊參與討論，共同研討學生狀況及處遇計畫。
                                </p>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_10.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Portfolio item 10 modal popup-->
    <div class="portfolio-modal modal fade" id="portfolioModal10" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/img/close-icon.svg"
                        alt="Close modal" />
                </div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h3 class="text-uppercase">個案討論會：每月</h3>
                                <p class="item-intro text-muted">相關會議</p>

                                <p>
                                    每月由督導醫師定期召開個案討論會，邀請家長及各校代表到院參予討論，實際了解學生狀況，並交流教學相關策略及分享問題解決經驗，以利學生將來回歸。
                                </p>

                                <img class="img-fluid d-block mx-auto"
                                    src="/assets/img/portfolio/course/course_right_11.jpg" alt="..." />

                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    關閉視窗
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>