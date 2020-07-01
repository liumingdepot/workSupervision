<template>
    <div class="word">
        <!-- 用户使用声明-->
        <div class="WordSection1" v-if="type == 1" style="layout-grid:15.6pt">

            <p class="MsoNormal"><a name="4237-1586420985661"></a><b style="mso-bidi-font-weight:
normal"><span style="font-size:10.0pt;mso-bidi-font-size:11.0pt;font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">特别提示：</span></b></p>

            <p class="MsoNormal"><a name="8072-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin">您在使用铁路影像采集平台</span><span lang="EN-US">(</span></b><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">简称</span><span lang="EN-US">"</span></b><b style="mso-bidi-font-weight:normal"><span
                    style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">本平台</span><span lang="EN-US">"</span></b><b style="mso-bidi-font-weight:
normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin">或</span><span lang="EN-US">“</span></b><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">地铁施工影像采集平台</span><span lang="EN-US">”)</span></b><b
                    style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">提供的各项服务之前，请您务必审慎阅读、充分理解本协议各条款内容，特别是以粗体标注的部分，包括但不限于免除或者限制责任的条款。如您不同意本服务协议及</span><span lang="EN-US">/</span></b><b
                    style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">或随时对其的修改，您可以主动停止本平台使用的服务；您一旦使用本平台的服务，即视为您已了解并完全同意本服务协议各项内容，包括本平台对服务协议随时所做的任何修改，并成为我们的用户。</span></b></p>

            <p class="MsoNormal"><a name="4094-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-size:10.0pt;mso-bidi-font-size:11.0pt;font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">一、总则</span></b></p>

            <p class="MsoNormal"><a name="7250-1586420998270"></a><span lang="EN-US">1. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">用户可以使用地铁施工影像采集平台各个频道、产品的单项服务，当用户使用本平台各单项服务时，用户的使用行为视为其对该单项服务的服务条款以及本平台在该单项服务中发出的各类公告的同意。</span></p>

            <p class="MsoNormal"><a name="8511-1586420998270"></a><span lang="EN-US">2. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">本平台用户协议以及各个频道、产品单项服务条款和公告可由本平台公司随时更新，且无需另行通知。您在使用相关服务时</span><span lang="EN-US">,</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">应关注并遵守其所适用的相关条款。</span></p>

            <p class="MsoNormal"><a name="5372-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-size:10.0pt;mso-bidi-font-size:11.0pt;font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">二、帐号注册与使用</span></b></p>

            <p class="MsoNormal"><a name="7030-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">您使用部分本平台产品或服务时需要注册本平台帐号，当您注册和使用本平台帐号时应遵守下述要求：</span></p>

            <p class="MsoNormal"><a name="9552-1586420998270"></a><span lang="EN-US">1. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">用户注册成功后，本平台将给予每个用户一个用户帐号，用户可以自主设置帐号密码。该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。</span></p>

            <p class="MsoNormal"><a name="6800-1586420998270"></a><span lang="EN-US">2. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，除本平台的具体产品对帐户有单独的注册要求外，您可获得本平台（帐号并成为本平台用户，可通过本平台帐户使用本平台平台的各项产品和服务。</span></p>

            <p class="MsoNormal"><a name="8155-1586420998270"></a><span lang="EN-US">3. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">为了方便您在本平台产品中享有一致性的服务，如您已经在某一本平台产品中登录本平台帐号，在您首次使用其他本平台产品时可能同步您的登录状态。此环节并不会额外收集、使用您的个人信息。如您想退出帐号登录，可在产品设置页面退出登录。</span></p>

            <p class="MsoNormal"><a name="4910-1586420998270"></a><span lang="EN-US">4. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">本平台帐号（即本平台用户</span><span lang="EN-US">ID</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">）的所有权归本平台公司，用户按注册页面引导填写信息，阅读并同意本协议且完成全部注册程序后，即可获得本平台帐号并成为用户。用户应提供及时、详尽及准确的个人资料，并不断更新注册资料，符合及时、详尽准确的要求。所有原始键入的资料将引用为注册资料。如果因注册信息不真实或更新不及时而引发的相关问题，本平台公司不负任何责任。您可以通过本平台帐号设置页面查询、更正您的信息，用户应当通过真实身份信息认证注册帐号，且用户提交的帐号名称、头像和简介等注册信息中不得出现违法和不良信息，经本平台审核，如存在上述情况，本平台将不予注册；同时，在注册后，如发现用户以虚假信息骗取帐号名称注册，或其帐号头像、简介等注册信息存在违法和不良信息的，本平台有权不经通知单方采取限期改正、暂停使用、注销登记、收回等措施。</span>
            </p>

            <p class="MsoNormal"><a name="7610-1586420998270"></a><span lang="EN-US">5. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">基于国家法律法规的规定要求或者本平台服务政策的要求，您在使用某些本平台服务时需要填写真实的姓名、身份证号等信息。若您填写的信息不完整、不正确，则可能无法使用相应服务或在使用过程中受到限制。</span></p>

            <p class="MsoNormal"><a name="9617-1586420998270"></a><a name="2044-1586420998270"></a><span lang="EN-US">6. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本平台帐号包括帐户名称和密码，您可使用设置的帐户名称（包括用户名、手机号、邮箱）和密码登录；在帐号使用过程中，为了保障您的帐号安全基于不同的终端以及您的使用习惯，我们可能采取不同的验证措施识别您的身份。例如您的帐户在新设备首次登录，我们可能通过密码加校验码的方式识别您的身份，验证方式包括但不限于短信验证码、服务使用信息验证。</span>
            </p>

            <p class="MsoNormal"><a name="3116-1586420998270"></a><span lang="EN-US">7. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">用户不应将其帐号、密码转让、出售或出借予他人使用，帐号使用权仅属于初始申请注册人，用户应对帐号内的全部行为独立承担全部责任。如因帐号转让、买卖或出借导致的帐号纠纷或本平台无法判断帐号归属等情况，本平台有权拒绝提供帐号找回，并视情况采取冻结帐号、封禁帐号等措施。</span>
            </p>

            <p class="MsoNormal"><a name="7365-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span lang="EN-US">8. </span></b><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">因您个人原因导致的帐号无法使用，如需找回本平台帐号，请按照本平台帐号找回要求提供相应的信息，并确保提供的信息合法真实有效，若提供的信息不符合要求或帐号的唯一凭证不再有效，无法通过本平台公司安全验证，因存在帐号被盗等安全风险导致无法判断帐号归属，本平台有权拒绝提供帐号找回服务，并视情况采取冻结帐号、封禁帐号等措施。您本平台帐号下绑定的手机号如因您个人原因停止使用，请尽快更改本平台帐号的绑定手机，否则如遇运营商二次放号，二次放号的用户可以通过您原来的手机号进行验证登录，可查看到您的全部帐号信息及产品使用信息，您的本平台帐号将无法继续使用，帐号内个人信息也有泄露的风险，请您务必及时更换绑定手机，如因未及时换绑手机号导致帐号丢失或个人信息泄露的责任由您自行承担，本平台有权拒绝提供帐号找回服务，并视情况采取冻结帐号、封禁帐号等措施。</span></b>
            </p>

            <p class="MsoNormal"><a name="5910-1586420998270"></a><span lang="EN-US">10. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">在需要终止使用本平台帐号服务时，符合以下条件的，您可以申请注销您的本平台帐号。</span></p>

            <p class="MsoNormal"><a name="2825-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）您仅能申请注销您本人的帐号，并依照本平台公司的流程进行注销；</span></p>

            <p class="MsoNormal"><a name="9678-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）您仍应对您在注销帐号前且使用本平台公司服务期间的行为承担相应责任，同时本平台公司仍可保存您注销前的相关信息；</span></p>

            <p class="MsoNormal"><a name="9718-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）注销成功后，帐号信息、个人身份证信息、交易记录、会员权益等将无法恢复或提供；</span></p>

            <p class="MsoNormal"><a name="6896-1586420998270"></a><a name="5552-1586420998270"></a><span lang="EN-US">11. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们将按照本平台的隐私权保护声明使用您在注册本平台帐户、使用本平台服务中提交、留存的信息。您保证在您使用本平台的所有产品和服务前，已经充分了解并同意本平台可以据此处理用户信息。</span>
            </p>

            <p class="MsoNormal"><a name="9012-1586420998270"></a><span lang="EN-US">13. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">为了满足相关法律法规的要求和保障您的帐号安全，尤其是您在进行帐号解绑、注销等敏感操作时，我们会将您提交的个人身份信息发送至银行、运营商等机构进行验证查询，以核实您身份的真实性。</span></p>

            <p class="MsoNormal"><a name="9765-1586420998270"></a><span lang="EN-US">14. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">当用户使用一键登录功能时，运营商会将用户的本机手机号传输给本平台，用以本平台判断您的手机号是否已注册本平台帐号。如您的手机号已注册本平台帐号，并通过安全验证，则您将无需填写手机号、验证码、帐户名、密码等，可直接完成帐号登录。如您不满足一键登录的要求，或者选取了其他登录方式，您可使用其他登录方式进行帐号登录。</span>
            </p>

            <p class="MsoNormal"><a name="9572-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-size:10.0pt;mso-bidi-font-size:11.0pt;font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">三、使用规则</span></b></p>

            <p class="MsoNormal"><a name="4214-1586420998270"></a><span lang="EN-US">1. </span><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">用户在使用本平台的服务时，必须遵守《网络安全法》等中华人民共和国相关法律法规的规定，用户应同意将不会利用本服务进行任何违法或不正当的活动，包括但不限于下列行为</span><span
                    lang="EN-US">:</span></b></p>

            <p class="MsoNormal"><a name="2019-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">上载、展示、张贴、传播或以其它方式传送含有下列内容之一的信息：</b></span></p>

            <p class="MsoNormal"><a name="4572-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">反对宪法所确定的基本原则的；</b></span></p>

            <p class="MsoNormal"><a name="5216-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</b></span></p>

            <p class="MsoNormal"><a name="6251-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">损害国家荣誉和利益的；</b></span></p>

            <p class="MsoNormal"><a name="7800-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">4</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">煽动民族仇恨、民族歧视、破坏民族团结的；</b></span></p>

            <p class="MsoNormal"><a name="7561-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">5</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">破坏国家宗教政策，宣扬邪教和封建迷信的；</b></span></p>

            <p class="MsoNormal"><a name="4854-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">6</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">散布谣言，扰乱社会秩序，破坏社会稳定的；</b></span></p>

            <p class="MsoNormal"><a name="8917-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">7</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</b></span></p>

            <p class="MsoNormal"><a name="1779-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">8</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">侮辱或者诽谤他人，侵害他人合法权利的；</b></span></p>

            <p class="MsoNormal"><a name="7810-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">9</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容；</b></span>
            </p>

            <p class="MsoNormal"><a name="7729-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">10</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的；</b></span>
            </p>

            <p class="MsoNormal"><a name="4630-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">不得为任何非法目的而使用网络服务系统；</b></span></p>

            <p class="MsoNormal"><a name="8267-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">不利用本平台公司的服务从事以下活动：</b></span></p>

            <p class="MsoNormal"><a name="3928-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">1) </span><b
                    style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">未经允许，进入计算机信息网络或者使用计算机信息网络资源的；</span></b></p>

            <p class="MsoNormal"><a name="8342-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">2) </span><b
                    style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">未经允许，对计算机信息网络功能进行删除、修改或者增加的；</span></b></p>

            <p class="MsoNormal"><a name="2796-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">3) </span><b
                    style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加的；</span></b></p>

            <p class="MsoNormal"><a name="8293-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">4) </span><b
                    style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">故意制作、传播计算机病毒等破坏性程序的；</span></b></p>

            <p class="MsoNormal"><a name="1900-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">5) </span><b
                    style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">其他危害计算机信息网络安全的行为。</span></b></p>

            <p class="MsoNormal"><a name="3242-1586420998270"></a><span lang="EN-US">2. </span><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">用户违反本协议或相关的服务条款的规定，导致或产生的任何第三方主张的任何索赔、要求或损失，包括合理的律师费，您同意赔偿本平台公司与合作公司、关联公司，并使之免受损害。对此，本平台公司有权视用户的行为性质，采取包括但不限于删除用户发布信息内容、暂停使用许可、终止服务、限制使用、回收本平台帐号、追究法律责任等措施。对恶意注册本平台帐号或利用本平台帐号进行违法活动、捣乱、骚扰、欺骗、其他用户以及其他违反本协议的行为，本平台公司有权回收其帐号。同时，本平台公司会视司法部门的要求，协助调查。</span></b>
            </p>

            <p class="MsoNormal"><a name="1533-1586420998270"></a><span lang="EN-US">3. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">用户不得对本服务任何部分或本服务之使用或获得，进行复制、拷贝、出售、转售或用于任何其它商业目的。</span></p>

            <p class="MsoNormal"><a name="5774-1586420998270"></a><span lang="EN-US">4. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">用户须对自己在使用本平台服务过程中的行为承担法律责任。用户承担法律责任的形式包括但不限于：对受到侵害者进行赔偿，以及在本平台首先承担了因用户行为导致的行政处罚或侵权损害赔偿责任后，用户应给予本平台等额的赔偿。</span></p>

            <p class="MsoNormal"><a name="9037-1586420998270"></a><span lang="EN-US">5. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">用户在使用本平台公司服务时遵守以下互联网底线：</span></p>

            <p class="MsoNormal"><a name="2068-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）法律法规底线</span></p>

            <p class="MsoNormal"><a name="4410-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）社会主义制度底线</span></p>

            <p class="MsoNormal"><a name="4063-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）国家利益底线</span></p>

            <p class="MsoNormal"><a name="5280-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">4</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）公民合法权益底线</span></p>

            <p class="MsoNormal"><a name="3230-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">5</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）社会公共秩序底线</span></p>

            <p class="MsoNormal"><a name="6663-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">6</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）道德风尚底线</span></p>

            <p class="MsoNormal"><a name="7483-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　</span><span lang="EN-US">7</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）信息真实性底线</span></p>

            <p class="MsoNormal"><a name="6944-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-size:10.0pt;mso-bidi-font-size:11.0pt;font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">四、服务内容</span></b></p>

            <p class="MsoNormal"><a name="8489-1586420998270"></a><span lang="EN-US">1. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">本平台公司网络服务的具体内容由本平台公司根据实际情况提供。</span></p>

            <p class="MsoNormal"><a name="4012-1586420998270"></a><span lang="EN-US">2. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">除非本服务协议另有其它明示规定，本平台公司所推出的新产品、新功能、新服务，均受到本服务协议之规范。</span></p>

            <p class="MsoNormal"><a name="8780-1586420998270"></a><span lang="EN-US">3. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">为使用本服务，您必须能够自行经有法律资格对您提供互联网接入服务的第三方，进入国际互联网，并应自行支付相关服务费用。此外，您必须自行配备及负责与国际联网连线所需之一切必要装备，包括计算机、数据机或其它存取装置。</span></p>

            <p class="MsoNormal"><a name="9046-1586420998270"></a><span lang="EN-US">4. </span><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">鉴于网络服务的特殊性，用户同意本平台有权不经事先通知，随时变更、中断或终止部分或全部的网络服务（包括收费网络服务）。本平台不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。</span></b>
            </p>

            <p class="MsoNormal"><a name="3720-1586420998270"></a><span lang="EN-US">5. </span><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">免责声明：因以下情况造成网络服务在合理时间内的中断，本平台无需为此承担任何责任；</span></b></p>

            <p class="MsoNormal"><a name="5264-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">本平台需要定期或不定期地对提供网络服务的平台或相关的设备进行检修或者维护，本平台保留不经事先通知为维修保养、升级或其它目的暂停本服务任何部分的权利。</b></span>
            </p>

            <p class="MsoNormal"><a name="9338-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因；</b></span></p>

            <p class="MsoNormal"><a name="2314-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">用户的电脑软硬件和通信线路、供电线路出现故障的；</b></span></p>

            <p class="MsoNormal"><a name="2660-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">（</span><span lang="EN-US">4</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）<b style="mso-bidi-font-weight:normal">因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行原因、第三方服务瑕疵或政府行为等原因。</b></span>
            </p>

            <p class="MsoNormal"><a name="9340-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin">尽管有前款约定，本平台将采取合理行动积极促使服务恢复正常。</span></b></p>

            <p class="MsoNormal"><a name="3878-1586420998270"></a><span lang="EN-US">6. </span><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本服务或第三人可提供与其它国际互联网上之网站或资源之链接。由于本平台无法控制这些网站及资源，您了解并同意，此类网站或资源是否可供利用，本平台不予负责，存在或源于此类网站或资源之任何内容、广告、产品或其它资料，本平台亦不予保证或负责。因使用或依赖任何此类网站或资源发布的或经由此类网站或资源获得的任何内容、商品或服务所产生的任何损害或损失，本平台不承担任何责任。</span></b>
            </p>

            <p class="MsoNormal"><a name="6771-1586420998270"></a><span lang="EN-US">7. </span><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">用户明确同意其使用本平台网络服务所存在的风险将完全由其自己承担。用户理解并接受下载或通过本平台服务取得的任何信息资料取决于用户自己，并由其承担系统受损、资料丢失以及其它任何风险。本平台对在服务网上得到的任何商品购物服务、交易进程、招聘信息，都不作担保。</span></b>
            </p>

            <p class="MsoNormal"><a name="9967-1586420998270"></a><span lang="EN-US">8.</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">　<b style="mso-bidi-font-weight:normal">用户须知：本平台提供的各种挖掘推送服务中，推送给用户曾经访问过的网站或资源之链接是基于机器算法自动推出，本平台不对其内容的有效性、安全性、合法性等做任何担保。</b></span></p>

            <p class="MsoNormal"><a name="5013-1586420998270"></a><span lang="EN-US">9. </span><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本平台有权于任何时间暂时或永久修改或终止本服务（或其任何部分），而无论其通知与否，本平台对用户和任何第三人均无需承担任何责任。</span></b></p>

            <p class="MsoNormal"><a name="6026-1586420998270"></a><span lang="EN-US">10. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">终止服务</span></p>

            <p class="MsoNormal"><a name="8678-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
minor-latin;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
mso-hansi-theme-font:minor-latin">您同意本平台得基于其自行之考虑，因任何理由，包含但不限于长时间（超过一年）未使用，或本平台认为您已经违反本服务协议的文字及精神，终止您的密码、帐号或本服务之使用（或服务之任何部分），并将您在本服务内任何内容加以移除并删除。您同意依本服务协议任何规定提供之本服务，无需进行事先通知即可中断或终止，您承认并同意，本平台可立即关闭或删除您的帐号及您帐号中所有相关信息及文件，及</span><span
                    lang="EN-US">/</span></b><b style="mso-bidi-font-weight:normal"><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">或禁止继续使用前述文件或本服务。此外，您同意若本服务之使用被中断或终止或您的帐号及相关信息和文件被关闭或删除，本平台对您或任何第三人均不承担任何责任。</span></b></p>

            <p class="MsoNormal"><a name="1235-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-size:10.0pt;mso-bidi-font-size:11.0pt;font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">五、知识产权和其他合法权益（包括但不限于名誉权、商誉权）</span></b></p>

            <p class="MsoNormal"><a name="2039-1586420998270"></a><span lang="EN-US">1. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">用户权利保护</span></p>

            <p class="MsoNormal"><a name="5050-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">若您认为他人本平台帐号（包括本平台帐号的头像、用户名、昵称、简介）的使用侵犯了您的合法权益，请按照以下说明向本平台提供资料</span><span
                    lang="EN-US">∶</span></p>

            <p class="MsoNormal"><a name="5182-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请注意：如果权利通知的陈述失实，权利通知提交者将承担对由此造成的全部法律责任（包括但不限于赔偿各种费用及律师费）。如果上述个人或单位不确定网络上可获取的资料是否侵犯了其知识产权和其他合法权益，本平台建议该个人或单位首先咨询专业人士。</span>
            </p>

            <p class="MsoNormal"><a name="8655-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">为了本平台有效处理上述个人或单位的权利通知，请使用以下格式（包括各条款的序号）：</span></p>

            <p class="MsoNormal"><a name="6056-1586420998270"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">）权利人对涉嫌侵权内容拥有合法权益的权属证明；</span></p>

            <p class="MsoNormal"><a name="2158-1586420998270"></a><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">）请充分、明确地描述被侵犯了合法权益的情况并请提供涉嫌侵权的第三方帐号信息（包括用户名、昵称、头像、简介）和网址（如果有）。</span></p>

            <p class="MsoNormal"><a name="1234-1586420998270"></a><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">）请指明涉嫌侵权帐号的哪些内容侵犯了第</span><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">项中列明的权利。</span></p>

            <p class="MsoNormal"><a name="8622-1586420998270"></a><span lang="EN-US">4</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">）请提供权利人具体的联络信息，包括姓名、身份证或护照复印件（对自然人）、单位登记证明复印件（对单位）、通信地址、电话号码、传真和电子邮件。</span></p>

            <p class="MsoNormal"><a name="4885-1586420998270"></a><span lang="EN-US">5</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">）请在权利通知中加入如下关于通知内容真实性的声明：</span><span lang="EN-US"> “</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">我保证，本通知中所述信息是充分、真实、准确的，如果本权利通知内容不完全属实，本人将承担由此产生的一切法律责任。</span><span lang="EN-US">”</span></p>

            <p class="MsoNormal"><a name="3854-1586420998270"></a><span lang="EN-US">6</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">）请您签署该文件，如果您是依法成立的机构或组织，请您加盖公章。</span></p>

            <p class="MsoNormal"><a name="2080-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;
color:black;mso-themecolor:text1">请您把以上资料的原件扫描件发送至</span><a name="3757-1586420998270"></a><a name="5550-1586420998270"></a><a
                    name="3974-1586420998270"></a><span lang="EN-US" style="color:black;mso-themecolor:
text1">80091950@qq.com</span></p>

            <p class="MsoNormal"><span lang="EN-US">2. </span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本平台公司拥有本网站内所有资料的版权。任何被授权的浏览、复制、打印和传播属于本网站内的资料必须符合以下条件：</span></p>

            <p class="MsoNormal"><a name="2336-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　所有的资料和图象均以获得信息为目的；</span></p>

            <p class="MsoNormal"><a name="4840-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　所有的资料和图象均不得用于商业目的；</span></p>

            <p class="MsoNormal"><a name="3050-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">　　所有的资料、图象及其任何部分都必须包括此版权声明；</span></p>

            <p class="MsoNormal" style="text-indent:21.0pt"><a name="2770-1586420998270"></a><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">本平台所有的产品、技术与所有程序均属于本平台公司知识产权<a name="8983-1586420998270"></a>。</span><span lang="EN-US" style="mso-fareast-font-family:宋体"></span></p>

            <p class="MsoNormal" style="text-indent:21.0pt"><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">未经本平台许可，任何人不得擅自（包括但不限于：以非法的方式复制、传播、展示、镜像、上载、下载）使用。否则，本平台将依法追究法律责任。</span>
            </p>

            <p class="MsoNormal"><a name="6522-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-size:10.0pt;mso-bidi-font-size:11.0pt;font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">六、青少年用户特别提示</span></b></p>

            <p class="MsoNormal"><a name="6443-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">青少年用户必须遵守全国青少年网络文明公约：</span></p>

            <p class="MsoNormal"><a name="6076-1586420998270"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">要善于网上学习，不浏览不良信息；要诚实友好交流，不侮辱欺诈他人；要增强自护意识，不随意约会网友；要维护网络安全，不破坏网络秩序；要有益身心健康，不沉溺虚拟时空。</span>
            </p>

            <p class="MsoNormal"><a name="5724-1586420998270"></a><b style="mso-bidi-font-weight:
normal"><span style="font-size:10.0pt;mso-bidi-font-size:11.0pt;font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">七、其他</span></b></p>

            <p class="MsoNormal"><a name="9845-1586420998270"></a><span lang="EN-US">1. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。</span></p>

            <p class="MsoNormal"><a name="6392-1586420998270"></a><span lang="EN-US">2. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向本平台所在地西安仲裁委员会提起诉讼。</span></p>

            <p class="MsoNormal"><a name="7540-1586420998270"></a><span lang="EN-US">3.</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">　本平台公司未行使或执行本服务协议任何权利或规定，不构成对前述权利或权利之放弃。</span></p>

            <p class="MsoNormal"><a name="8620-1586420998270"></a><span lang="EN-US">4. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</span></p>

            <p class="MsoNormal"><a name="4740-1586420998270"></a><span lang="EN-US">5. </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">欢迎您使用本平台平台服务（以下称</span><span lang="EN-US">“</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">单项服务</span><span lang="EN-US">”</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">），并在本协议基础上，同时遵守单项服务协议的具体约定。</span><a name="1051-1586420998270"></a></p>

        </div>

        <!-- 隐私政策 -->
        <div class="WordSection1" v-if="type == 2" style="layout-grid:15.6pt">

            <p class="MsoNormal"><a name="2673-1586418658063"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本政策将帮助您了解以下内容</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="8929-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6311-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">一、我们如何收集和使用信息</span></p>

            <p class="MsoNormal"><a name="4969-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8294-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">二、您如何管理自己的信息</span></p>

            <p class="MsoNormal"><a name="3118-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2034-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">三、我们如何使用</span><span lang="EN-US">Cookie</span></p>

            <p class="MsoNormal"><a name="8725-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5700-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">四、我们如何对外提供信息</span></p>

            <p class="MsoNormal"><a name="8771-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6382-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">五、我们如何存储和保护信息</span></p>

            <p class="MsoNormal"><a name="5545-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1378-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">六、我们如何保护未成年人的信息</span></p>

            <p class="MsoNormal"><a name="9869-1586419767720"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2040-1586419767720"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">七、您的个人信息如何在全球范围转移</span></p>

            <p class="MsoNormal"><a name="3030-1586419767720"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1881-1586419767720"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">七、第三方责任说明</span></p>

            <p class="MsoNormal"><a name="4739-1586419767720"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6770-1586419767720"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">八、本政策适用与修订</span></p>

            <p class="MsoNormal"><a name="4142-1586419767720"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5981-1586419767720"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">九、如何联系我们</span></p>

            <p class="MsoNormal"><a name="2471-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6044-1586418664088"></a><span lang="EN-US">“</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">地铁施工影像采集平台</span><span lang="EN-US">APP”(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">简称</span><span lang="EN-US">"</span><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本</span><span lang="EN-US">APP"</span><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">或</span><span lang="EN-US">“</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">地铁施工影像采集平台</span><span lang="EN-US">”)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">由西安云轻软件技术有限公司</span><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">简称</span><span lang="EN-US">“</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">云轻软件</span><span lang="EN-US">”</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">或</span><span lang="EN-US">“</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们</span><span lang="EN-US">"</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">）所有和运营，我们的注册地址为</span><span lang="EN-US">:</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">陕西省西安市曲江新区行政商务区曲江茗筑第二幢</span><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">单元</span><span lang="EN-US">7</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">层</span><span lang="EN-US">2701</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">房。</span></p>

            <p class="MsoNormal"><a name="9526-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7681-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们深知个人信息对您的重要性，并会尽全力保护您的个人隐私信息安全可靠。我们致力于维持您对我们的信任，保护您的个人信息，恪守权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则的要求。同时，本</span><span
                    lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">承诺，我们将遵守并落实《网络安全法》的各项规定，依照业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。</span></p>

            <p class="MsoNormal"><a name="2083-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4022-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本《用户隐私政策》</span><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">简称</span><span lang="EN-US">“</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本隐私政策</span><span lang="EN-US">")</span><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">旨在解释我们如何收集、存储和使用您的个人信息，以及您如何行使您的隐私权利。</span></p>

            <p class="MsoNormal"><a name="4731-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2219-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">请您在使用本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">前认真阅读并充分理解本政策的全部内容，尤其是划线或加粗内容。如您对本隐私政策有任何疑问，请与我们的客服</span><u><span lang="EN-US"
                                                                                                                                   style="color:black;mso-themecolor:text1">13892886914</span></u><span
                    style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">联系。如您不同意协议中的任何发布或修订的条款，您可选择注销本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">账户，同时您应知晓，地铁施工影像采集平台</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">将无法再为您提供相关服务。</span></p>

            <p class="MsoNormal"><a name="8031-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7637-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本隐私政策中涉及的个人敏感信息，主要是为登录的用户鉴别与授权信息，以及在各类业务中收集、存储的，包括但不限于</span><span
                    lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="4239-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5076-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">身份基本信息</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="7062-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4666-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">包括客户姓名、民族、性别、职业、户籍地、住址、联系方式、号码。</span></p>

            <p class="MsoNormal"><a name="1456-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2167-1586418664088"></a><span lang="EN-US">|</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">个人常用设备信息</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="6289-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8285-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">包括设备唯一标识</span><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">包括</span><span lang="EN-US">IMEl/android ID</span><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">、</span><span lang="EN-US">SIM</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">卡</span><span lang="EN-US">IMSI</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">信息的描述个人常用设备基本情况的信息</span><span lang="EN-US">)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">、手机存储、手机网络信息</span><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">设备</span><span lang="EN-US">MAC</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">地址、设备</span><span lang="EN-US">IP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">地址、当前设备所连接</span><span lang="EN-US">WiFi</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">信息</span><span lang="EN-US">)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">。</span></p>

            <p class="MsoNormal"><a name="4430-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3499-1586418664088"></a><span lang="EN-US">|</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">摄像头拍照麦克风信息</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="1714-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3653-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">摄像头、拍摄照片、录制视频音频。</span></p>

            <p class="MsoNormal"><a name="6421-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3688-1586418664088"></a><span lang="EN-US">|</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">传感器信息</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="1226-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="9949-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">获取用户设备重力传感器信息。</span></p>

            <p class="MsoNormal"><a name="1326-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1618-1586418664088"></a><span lang="EN-US">|</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">悬浮窗信息</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="7951-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8392-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">获取用户设备悬浮窗。</span></p>

            <p class="MsoNormal"><a name="7373-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8334-1586418664088"></a><span lang="EN-US">|</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">个人位置信息</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="7018-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2685-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">包括定位信息。</span></p>

            <p class="MsoNormal"><a name="9960-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1832-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">一、我们如何收集和使用信息</span></p>

            <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7164-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">为了您可以正常使用地铁施工影像采集平台</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">服务，下列情形下您需要向我们提供相关信息</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="2930-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1012-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">一</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">注册、登录、认证</span></p>

            <p class="MsoNormal"><a name="2032-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6560-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">使用手机号码和账号注册登录本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">时，我们会记录您的手机号码，用于创建您的地铁施工影像采集平台账号；</span></p>

            <p class="MsoNormal"><a name="4076-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4398-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">二</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">设备信息</span></p>

            <p class="MsoNormal"><a name="3067-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2536-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">您需要同意本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">会获取与您的设备相关的信息，手机识别码权限，获取记录您的设备型号、操作系统、设备识别码信息。这些信息能够使本</span><span
                    lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">应用系统适配相应设备并确保您获得最新的版本功能</span><span lang="EN-US">,</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">并为您及时准确的推荐符合您阅读习惯的新闻内容资讯。</span></p>

            <p class="MsoNormal"><a name="8220-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6327-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">获取您的重力传感器信息，是为了您在看视频时可以根据您设备当前的状态横屏或者全屏播放视频，给您带来更好的体验。</span></p>

            <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4041-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">您在没有网络的情况下使用本</span><span lang="EN-US">APP,</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们会提醒您连接网络，可能会获取改变设备的</span><span lang="EN-US">WIFI</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">状态的权限。</span></p>

            <p class="MsoNormal"><a name="7056-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4810-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">三</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">用户手机号码</span></p>

            <p class="MsoNormal"><a name="5697-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6082-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">会根据用户的手机号码作为登录帐号，用户手机号码能够使用户进行正常登录和接收短信。</span></p>

            <p class="MsoNormal"><a name="3321-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><span lang="EN-US">(</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">四</span><span lang="EN-US">)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">用户基本信息</span></p>

            <p class="MsoNormal"><a name="8865-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4939-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">的个人设置中心，向用户征集是否填写用户基本信息，这些信息由您自愿提供，包括</span><span lang="EN-US">:</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">头像、昵称。</span></p>

            <p class="MsoNormal"><a name="4965-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7347-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">五</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">位置信息</span></p>

            <p class="MsoNormal"><a name="6329-1586419545603"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8536-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">您在使用本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">时我们会获取您的当前位置信息，以便为您提供天气、位置等信息。如果您未能授权获取上述信息，我们将不能准确的为您查询推荐您当前位置天气、位置等信息，但不影响查询功能的使用</span><span
                    lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="8770-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3997-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">七</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">为您提供本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">的其他具体服务，本应用会在提供具体服务前通过弹窗方式另行取得您的授权；</span></p>

            <p class="MsoNormal"><a name="2934-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3456-1586418664088"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、为了降低本</span><span lang="EN-US">APP</span><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">崩溃率，我们会在您授权同意后获取您设备的照片、媒体内容和文件，存储</span><span
                    lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">崩溃报错信息，并上传服务器，如果不授权该权限则本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">将不存储上传上述信息，也不会影响本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">其他服务功能的使用</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="8856-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6099-1586418664088"></a><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、为了您在本</span><span lang="EN-US">APP</span><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">中上传您的个性头像，我们会在您授权同意后获取本机摄像头和相册权限，如不授权该权限将不能使用所对应的功能服务</span><span
                    lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="2212-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5473-1586418664088"></a><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、为了方便您免密登录，我们会在您授权同意后获取您的手机号码，如果不授权该权限则不能使用免密登录功能</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8660-1586418664088"></a><span lang="EN-US">4</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、为了您在使用本</span><span lang="EN-US">APP</span><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">中拍摄、发布您的视频和图片，我们会在您授权同意后获取本机摄像头和相册权限，如不授权该权限将不能使用所对应的功能服务</span><span
                    lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="6567-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2134-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">八</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">个性化服务</span></p>

            <p class="MsoNormal"><a name="5042-1586419642162"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1383-1586418664088"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、为共同向您提供产品服务或改进产品服务的质量或出于对产品服务安全性的考量合理需要，我们可能按照相关法律法规及监管政策的要求或经过您的授权从关联公司、合作伙伴及其他受信任的第三方接收您的个人信息及其他信息；</span></p>

            <p class="MsoNormal"><a name="5979-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><span lang="EN-US">2</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">、随着本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">功能进一步丰富，后续新增功能如涉及获取用户授权时，我们将明确提示并在您授权同意后才会获取该功能所需权限。如未取得您的授权，我们将不会收集和使用相关信息。</span>
            </p>

            <p class="MsoNormal"><a name="5662-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5825-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">九</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">您充分知晓，以下情形中，我们收集、使用个人信息无需征得您的授权同意</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="1270-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8417-1586418664088"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、与国家安全、国防安全有关的；</span></p>

            <p class="MsoNormal"><a name="2410-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="9785-1586418664088"></a><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、与公共安全、公共卫生、重大公共利益有关的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="7653-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6464-1586418664088"></a><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、与犯罪侦查、起诉、审判和判决执行有关的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="8379-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8778-1586418664088"></a><span lang="EN-US">4</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、出于维护个人信息主体或其他个人的生命、财产重大合法权益但又很难得到本人同意的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="2467-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6427-1586418664088"></a><span lang="EN-US">5</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、所收集的个人信息是个人信息主体自行向社会公众公开的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3513-1586418664088"></a><span lang="EN-US">6</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开渠道</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="6942-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6549-1586418664088"></a><span lang="EN-US">7</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、根据您的要求签订和履行合同所必需的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="4672-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2233-1586418664088"></a><span lang="EN-US">8</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、用于维护所提供的产品与</span><span lang="EN-US">/</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">或服务的安全稳定运行所必需的，发现、处置产品与</span><span lang="EN-US">/</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">或服务的故障</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="2192-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2211-1586418664088"></a><span lang="EN-US">9</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、为合法的新闻报道所必需的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="8659-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="9359-1586418664088"></a><span lang="EN-US">10</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</span></p>

            <p class="MsoNormal"><a name="1673-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2680-1586418664088"></a><span lang="EN-US">11</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、法律法规规定的其他情形。</span></p>

            <p class="MsoNormal"><a name="7021-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1332-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">二、您如何管理自己的信息</span></p>

            <p class="MsoNormal"><a name="1083-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3228-1586418664088"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、您可通过本</span><span lang="EN-US">APP“</span><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我的</span><span lang="EN-US">”</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">模块中</span><span lang="EN-US">“</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">个人信息</span><span lang="EN-US">"</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">栏目查询、修改、更正您的个人信息、个人资料。</span></p>

            <p class="MsoNormal"><a name="4656-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7776-1586418664088"></a><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、对于您已经授权同意本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">收集和使用的终端设备权限信息，您可以通过在终端设备进行设置，改变或撤回您的授权同意。</span></p>

            <p class="MsoNormal"><a name="2850-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4844-1586418664088"></a><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、在以下情形中，按照法律法规及监管政策要求，我们将无法响应您的请求</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="3628-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1982-1586418664088"></a><span lang="EN-US">(1)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">与国家安全、国防安全有关的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="9291-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1999-1586418664088"></a><span lang="EN-US">(2)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">与公共安全、公共卫生、重大公共利益有关的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="1162-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5120-1586418664088"></a><span lang="EN-US">(3)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">与犯罪侦查、起诉和审判有关的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="1024-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2010-1586418664088"></a><span lang="EN-US">(4)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">有充分证据表明您存在主观恶意或滥用权利的</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="1241-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1765-1586418664088"></a><span lang="EN-US">(5)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">响应您的请求将导致其他个人、组织的合法权益受到严重损害的。</span></p>

            <p class="MsoNormal"><a name="5928-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5087-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">三、我们如何使用</span><span lang="EN-US">Cookie</span></p>

            <p class="MsoNormal"><a name="2860-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2975-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">为确保本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">正常运行，我们会在您的移动设备上存储名为</span><span lang="EN-US">Cookie</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">的小数据文件，制定给您的</span><span lang="EN-US">Cookie</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">是唯一的，它只能被将</span><span lang="EN-US">Cookies</span><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">发布给您域中的</span><span lang="EN-US">Web</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">服务器读取。</span><span lang="EN-US">Cookie</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">通常包含标识符、用户号码、用户标识和字符。</span></p>

            <p class="MsoNormal"><a name="5060-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3348-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们不会将</span><span lang="EN-US">Cookie</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">用于本政策所述目的之外的任何用途。您可根据退出登录删除</span><span lang="EN-US">Cookie,</span><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">也可以修改浏览器相关设置，以关闭</span><span lang="EN-US">Cookie</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">的使用或删除存储的</span><span lang="EN-US">Cookies,</span><span style="font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">但可能会影响您使用本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">提供的服务。</span></p>

            <p class="MsoNormal"><a name="1317-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1659-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">四、我们如何对外提供信息</span></p>

            <p class="MsoNormal"><a name="8015-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4120-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">一</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">共享</span></p>

            <p class="MsoNormal"><a name="2069-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1016-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们会按照法律法规及相关国家标准要求，以弹框提示、确认授权、电子协议多种形式征得您的同意，或确认第三方已征得您的同意，您可以选择停止共享您的信息。我们仅基于产品</span><span
                    lang="EN-US">/</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">服务的业务场景，与第三方共享您的信息，第三方包括地铁施工影像采集平台</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">关联公司、外部实名信息验证机构、合作的银行、服务提供商、广告、分析服务类的授权合作伙伴以及第三方商家。对于我们与之共享信息的第三方，我们会在完成并通过针对第三方的信息安全风险评估后、与其签署必要的保密协定，要求他们严格遵守相关法律法规与监管要求，遵照我们的本隐私政策采取保密和安全措施来处理个人信息，未经您的授权严禁用于自身或第三方营销活动。</span>
            </p>

            <p class="MsoNormal"><a name="8598-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7470-1586418664088"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、我们提供的第三方产品</span><span lang="EN-US">/</span><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">服务，可能由第三方提供或第三方联合我们提供，因此只有共享您的信息，才能实现我们的产品</span><span
                    lang="EN-US">/</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">服务的核心功能或提供您需要的服务。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的合作伙伴无权将共享的个人信息用于任何其他途径</span><span
                    lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="6525-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2140-1586418664088"></a><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、根据适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须情况进行提供</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="5387-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1375-1586418664088"></a><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、在法律法规允许且不违背公序良俗的范围内，为维护地铁施工影像采集平台</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、地铁施工影像采集平台</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">的关联方、您或其他地铁施工影像采集平台用户或社会公共利益、财产或安全免遭损害而有必要提供，比如为防止欺诈违法活动和减少信用风险，而与其他公司和组织交换信息。不过，这并不包括违反本隐私政策中所作的承诺而为获利目的出售、出租、共享或以其它方式披露的个人信息。我们的关联方无权将个人信息共享用于任何其他用途，我们的关联方如要改变个人信息的处理目的，将再次通过公告公示、弹框授权方式，征求您的授权同意</span><span
                    lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="7054-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4174-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">二</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">转让</span></p>

            <p class="MsoNormal"><a name="3600-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3187-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们不会将您的个人信息转移给任何公司、组织和个人，但以下情况除外</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="3987-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2912-1586418664088"></a><span lang="EN-US">1.</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">在获取明确同意的情况下转移</span><span lang="EN-US">:</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">获得您的明确同意后，我们会向其他方转移您的个人信息</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="7636-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1063-1586418664088"></a><span lang="EN-US">2.</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">在涉及合并、收购或破产清算时，如涉及到个人信息转移，我们会要求新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="1920-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6922-1586418664088"></a><span lang="EN-US">3.</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">相关法律法规规定的或我们与您约定的其他情形。</span></p>

            <p class="MsoNormal"><a name="6651-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2747-1586418664088"></a><span lang="EN-US">(</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">三</span><span lang="EN-US">)</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">公开披露</span></p>

            <p class="MsoNormal"><a name="3528-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2332-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们仅会在以下情况下，公开披露您的个人信息</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="3860-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="4371-1586418664088"></a><span lang="EN-US">1.</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">根据您的需求，在您明确同意或者授权的披露方式下披露您所指定的个人信息</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="1080-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3931-1586418664088"></a><span lang="EN-US">2.</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">根据法律法规的要求，强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求的个人信息类型和披露方式，在法律法规许可的前提下，采取符合业界标准的安全防护措施的前提下公开披露您的个人信息。</span></p>

            <p class="MsoNormal"><a name="7270-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1049-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">五、我们如何存储和保护信息</span></p>

            <p class="MsoNormal"><a name="2569-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6500-1586418664088"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、遵照《网络安全法》规定，我们在中华人民共和国境内收集和产生的个人信息将存储在中华人民共和国境内，对于所收集的信息，我们将在法律规定的最短期限内保存，超出保存期限后，我们将对所收集的信息进行匿名化处理。</span></p>

            <p class="MsoNormal"><a name="9056-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8650-1586418664088"></a><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、我们已使用符合业界标准的安全防护措施保护您提供的个人信息，采取措施保护数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会采取以下合理可行的措施，确保您个人信息的安全性、完整性、真实性、有效性</span><span lang="EN-US">:</span>
            </p>

            <p class="MsoNormal"><a name="5734-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="9729-1586418664088"></a><span lang="EN-US">(1)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">在本</span><span lang="EN-US">APP</span><span style="font-family:宋体;
mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">与服务之间交换数据时，采取参数鉴权及返回结果加密技术，确保您的个人信息在传输过程中的安全。</span></p>

            <p class="MsoNormal"><a name="3821-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6589-1586418664088"></a><span lang="EN-US">(2)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">使用加密技术对个人信息数据进行存储，使用受信赖的保护机制防止数据遭到攻击</span><span lang="EN-US">;</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">在涉及个人信息需要展示的应用界面，我们采用必要的掩码脱敏手段以确保不受非法窃取。</span></p>

            <p class="MsoNormal"><a name="3230-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="6617-1586418664088"></a><span lang="EN-US">(3)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">在您初次使用本</span><span lang="EN-US">APP</span><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">时，我们会遵循最小化原则，结合具体业务场景及其所涉设备权限，按需阐明用途，征求您的充分授权，保障您的知情权和隐私权不受侵犯。</span>
            </p>

            <p class="MsoNormal"><a name="5547-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1388-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们承诺收集的信息</span><span lang="EN-US">,</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">仅用于提供地铁施工影像采集平台</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">的服务，不得用于除此之外的任何其他用途。</span></p>

            <p class="MsoNormal"><a name="4424-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8059-1586418664088"></a><span lang="EN-US">(4)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">我们建立了数据安全管理制度，明确了数据分类分级方式和敏感信息管理要求，规范了信息存储准则。我们部署严格的访问控制、多重身份认证机制以及定期开展访问日志复核，确保只有授权人员才可访问个人信息，防止越权和违规操作。</span></p>

            <p class="MsoNormal"><a name="7455-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5984-1586418664088"></a><span lang="EN-US">(5)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">我们建立了完备的安全事件处置措施和补救措施，每年针对个人信息保护进行应急预案的演练，及时定位风险，持续监控态势。同时定期举办敏感数据安全和隐私保护培训课程，加深员工保护个人信息的安全意识，截止目前未发生任何个人信息泄露、毁损、丢失的风险事件。</span></p>

            <p class="MsoNormal"><a name="1945-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1164-1586418664088"></a><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、互联网并非绝对安全的环境，而且电子邮件、即时通讯交流方式并未严格受到强加密保护，为了您的个人信息安全，我们强烈建议您不要通过此类方式传输个人信息。尽可能最小化向第三方提供个人信息，防止非法窃取盗用和未经授权访问带来的信息泄露。请您尽可能使用复杂密码、一次性验证码两种组合验证方式，协助我们保证您的账号安全。如您发现自己的个人信息泄密，尤其是您的账户信息及密码发生泄露，请您立即通过本政策约定的联系方式联络我们，以便我们在尽快时间内配合您采取相应措施。</span>
            </p>

            <p class="MsoNormal"><a name="5980-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3267-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">六、我们如何保护未成人信息</span></p>

            <p class="MsoNormal"><a name="5840-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7528-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">若您是</span><span lang="EN-US">18</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">周岁以下的未成年人，我们鼓励您在父母或监护人的指导下使用我们的服务，请您的父母或监护人阅读本政策，并在征得您父母或监护人同意的前提下使用我们的服务或向我们提供您的信息，地铁施工影像采集平台</span><span
                    lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">根据国家相关法律法规的规定要求保护未成年人的个人信息。如您的监护人不同意您按照本政策使用我们的服务或向我们提供信息，请您立即终止使用我们的服务并及时通知我们，以便我们采取相应的措施。</span>
            </p>

            <p class="MsoNormal"><a name="6831-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2155-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">七、您的个人信息如何在全球范围转移</span></p>

            <p class="MsoNormal"><a name="4916-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7011-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">我们通过本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">在中华人民共和国境内</span><span lang="EN-US">( </span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">下称中国，为本隐私政策之目的，不含香港、澳门、台湾地区，下同</span><span lang="EN-US">)</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">收集的个人信息，将存储在中国境内。本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">不提供境外服务，也无法将个人信息转移出去。</span></p>

            <p class="MsoNormal"><a name="7697-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2913-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">八、第三方责任说明</span></p>

            <p class="MsoNormal"><a name="5617-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="1526-1586418664088"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、如您通过本</span><span lang="EN-US">APP</span><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">，使用了由第三方而非地铁施工影像采集平台提供的服务时，我们会尽力确保您的账号安全，使您获得更安全的访问体验，我们会使用传输过程加密并验证参数签名的方式，可以帮助您识别防范钓鱼、账号泄露风险，同时更有利于保障您和第三方的共同权益，尽力阻止不法分子篡改您和您希望访问的第三方之间正常服务内容，尽力使您的个人信息在传输过程中的安全</span><span
                    lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="9425-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3065-1586418664088"></a><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、您通过我们客户端接入使用的第三方服务，查看第三方创建的网页或使用第三方开发的应用程序时，向您提示这些第三方会获取您的信息，您应当进行关注。服务提供方可能有自己的独立隐私权保护政策，我们对第三方服务提供方对您的个人信息采取保护措施会尽到法律规定的义务，请您在使用第三方服务时，务必与第三方直接联系以获得关于他们的隐私权政策详情。如果您发现这些第三方服务存在风险时，建议您终止相关操作以保护您的合法权益。</span>
            </p>

            <p class="MsoNormal"><a name="3693-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3128-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">九、本政策适用与修订</span></p>

            <p class="MsoNormal"><a name="4871-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3547-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">所有服务均适用本政策，基于为给您提供更好的服务的目的，并根据业务的发展或法律法规及监管政策变化的要求，我们可能会适时对本政策进行修订和更新。对于修订或更新后的隐私政策，我们将在本平台以发布公告的方式或以其他适当的方式提醒您相关内容的更新。对于重大变更，我们可能还会提供更为显著的通知，包括但不限于短信通知、客户端消息中心，说明隐私政策的具体变更内容。</span>
            </p>

            <p class="MsoNormal"><a name="6499-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2130-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">本政策所指的重大变更包括但不限于</span><span lang="EN-US">:</span></p>

            <p class="MsoNormal"><a name="5230-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2910-1586418664088"></a><span lang="EN-US">1</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、我们的服务模式发生重大变化</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="3650-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="3420-1586418664088"></a><span lang="EN-US">2</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、个人信息共享、转让或公开披露的主要对象发生变化</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="4855-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="8424-1586418664088"></a><span lang="EN-US">3</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、您参与个人信息处理方面的权利及其行使方式发生重大变化</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="2058-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="5200-1586418664088"></a><span lang="EN-US">4</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、我们负责处理个人信息安全的联络方式及投诉渠道发生变化时</span><span lang="EN-US">;</span></p>

            <p class="MsoNormal"><a name="3913-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7140-1586418664088"></a><span lang="EN-US">5</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">、个人信息安全影响评估报告以及敏感信息内部审计报告表明存在高风险时。</span></p>

            <p class="MsoNormal"><a name="2645-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7837-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">十、如何联系我们</span></p>

            <p class="MsoNormal"><a name="4177-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="2210-1586418664088"></a><span style="font-family:
宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">若您对本</span><span lang="EN-US">APP</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">、本隐私政策或您个人信息的相关事宜有任何意见、建议或申诉，可以拨打电话</span><span lang="EN-US"
                                                                                                                style="color:black;mso-themecolor:text1">13892886914</span><span
                    style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">，您还可以通过<span style="color:black;mso-themecolor:text1">发送邮件至</span></span><span lang="EN-US" style="color:black;mso-themecolor:text1">80091950@qq.com,</span><span
                    style="font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:
minor-latin">与客服专员进一步沟通。一般情况下，我们将在七十二小时内回复，特殊情况下，最长将在不超过</span><span lang="EN-US">7</span><span style="font-family:宋体;mso-ascii-font-family:Calibri;
mso-ascii-theme-font:minor-latin;mso-fareast-theme-font:minor-fareast;
mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin">个工作日或法律法规规定期限内做出答复。如果您对我们的回复不满意，特别是我们的个人信息处理行为损害了您的合法权益，您可以与我们再次沟通或向有权机关反映。</span></p>

            <p class="MsoNormal"><a name="6061-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

            <p class="MsoNormal"><a name="7350-1586418664088"></a><span lang="EN-US">&nbsp;</span></p>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['type']
    }
</script>

<style scoped>

    .word {
        height: 50vh;
        overflow: scroll;
    }

    p.MsoNormal, li.MsoNormal, div.MsoNormal {
        mso-style-unhide: no;
        mso-style-qformat: yes;
        mso-style-parent: "";
        margin: 0cm;
        margin-bottom: .0001pt;
        text-align: justify;
        text-justify: inter-ideograph;
        mso-pagination: none;
        font-size: 10.5pt;
        mso-bidi-font-size: 11.0pt;
        font-family: "Calibri", sans-serif;
        mso-ascii-font-family: Calibri;
        mso-ascii-theme-font: minor-latin;
        mso-fareast-font-family: 宋体;
        mso-fareast-theme-font: minor-fareast;
        mso-hansi-font-family: Calibri;
        mso-hansi-theme-font: minor-latin;
        mso-bidi-font-family: "Times New Roman";
        mso-bidi-theme-font: minor-bidi;
    }

    a:link, span.MsoHyperlink {
        mso-style-unhide: no;
        color: blue;
        text-decoration: underline;
        text-underline: single;
    }

    a:visited, span.MsoHyperlinkFollowed {
        mso-style-unhide: no;
        color: purple;
        mso-themecolor: followedhyperlink;
        text-decoration: underline;
        text-underline: single;
    }

    .MsoChpDefault {
        mso-style-type: export-only;
        mso-default-props: yes;
        font-size: 10.0pt;
        mso-ansi-font-size: 10.0pt;
        mso-bidi-font-size: 10.0pt;
        font-family: "Calibri", sans-serif;
        mso-bidi-font-family: "Times New Roman";
        mso-bidi-theme-font: minor-bidi;
        mso-font-kerning: 0pt;
    }


    div.WordSection1 {
        page: WordSection1;
    }
</style>
