
  var renderAll = false
  var nodes = new vis.DataSet([{"id":"root.SlackChannelConfiguration","dependencies":[{"key":"Ref","value":[],"path":"$.Properties.ConfigurationName"},{"key":"Ref","value":[],"path":"$.Properties.LoggingLevel"},{"key":"Ref","value":[],"path":"$.Properties.SlackChannelId"},{"key":"Ref","value":[],"path":"$.Properties.SlackWorkspaceId"},{"key":"Ref","value":[],"path":"$.Properties.SnsTopicArns"},{"key":"Ref","value":[],"path":"$.Properties.UserRoleRequired"},{"key":"Fn::GetAtt","value":["ChatbotIamRole"],"path":"$.Properties.IamRoleArn"}],"prefix":"root","hidden":false,"type":"AWS::Chatbot::SlackChannelConfiguration","label":"SlackChannelConfiguration","shape":"image","image":"data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2280px%22%20height%3D%2280px%22%20viewBox%3D%220%200%2080%2080%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Ctitle%3EIcon-Architecture%2F64%2FArch_AWS-Chatbot_64%3C%2Ftitle%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22100%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%20id%3D%22linearGradient-1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23B0084D%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23FF4F8B%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Icon-Architecture%2F64%2FArch_AWS-Chatbot_64%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Rectangle%22%20fill%3D%22url(%23linearGradient-1)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2280%22%20height%3D%2280%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M37.9997933%2C23%20L41.9993241%2C23%20L41.9993241%2C21%20L37.9997933%2C21%20L37.9997933%2C23%20Z%20M31.0006144%2C23%20L35.0001452%2C23%20L35.0001452%2C21%20L31.0006144%2C21%20L31.0006144%2C23%20Z%20M24.0014355%2C23%20L28.0009663%2C23%20L28.0009663%2C21%20L24.0014355%2C21%20L24.0014355%2C23%20Z%20M65.7065429%2C51.356%20C65.4035784%2C52.062%2064.7666531%2C52.595%2063.9967435%2C52.844%20L63.9967435%2C47.193%20C64.6036723%2C47.409%2065.1416092%2C47.798%2065.5075662%2C48.354%20C66.080499%2C49.225%2066.1544903%2C50.319%2065.7065429%2C51.356%20L65.7065429%2C51.356%20Z%20M15.2934571%2C51.356%20C14.8455097%2C50.319%2014.9185011%2C49.225%2015.4924338%2C48.354%20C15.8583908%2C47.798%2016.3963277%2C47.409%2017.0022566%2C47.193%20L17.0022566%2C52.845%20C16.2333469%2C52.596%2015.5964216%2C52.062%2015.2934571%2C51.356%20L15.2934571%2C51.356%20Z%20M67.1773703%2C47.254%20C66.4364573%2C46.127%2065.287592%2C45.372%2063.9967435%2C45.109%20L63.9967435%2C43.333%20C63.9967435%2C39.841%2061.3060591%2C37%2057.9974473%2C37%20L38.999676%2C37%20L38.999676%2C39%20L57.9974473%2C39%20C60.2041884%2C39%2061.9969781%2C40.944%2061.9969781%2C43.333%20L61.9969781%2C56.667%20C61.9969781%2C59.056%2060.2041884%2C61%2057.9974473%2C61%20L23.0015528%2C61%20C20.7958116%2C61%2019.002022%2C59.056%2019.002022%2C56.667%20L19.002022%2C43.333%20C19.002022%2C40.944%2020.7958116%2C39%2023.0015528%2C39%20L28.0009663%2C39%20L28.0009663%2C37%20L23.0015528%2C37%20C19.6939409%2C37%2017.0022566%2C39.841%2017.0022566%2C43.333%20L17.0022566%2C45.109%20C15.7114081%2C45.372%2014.5635427%2C46.127%2013.8226297%2C47.254%20C12.8727411%2C48.697%2012.7387568%2C50.481%2013.4556727%2C52.147%20C14.0805994%2C53.598%2015.4174426%2C54.614%2017.0022566%2C54.91%20L17.0022566%2C56.667%20C17.0022566%2C60.159%2019.6939409%2C63%2023.0015528%2C63%20L35.0001452%2C63%20L35.0001452%2C69%20L36.9999106%2C69%20L36.9999106%2C63%20L42.9992068%2C63%20L42.9992068%2C69%20L44.9989722%2C69%20L44.9989722%2C63%20L57.9974473%2C63%20C61.3060591%2C63%2063.9967435%2C60.159%2063.9967435%2C56.667%20L63.9967435%2C54.91%20C65.5835573%2C54.614%2066.9204005%2C53.598%2067.5443273%2C52.147%20C68.2612432%2C50.481%2068.1272589%2C48.697%2067.1773703%2C47.254%20L67.1773703%2C47.254%20Z%20M32.0004971%2C50%20C32.0004971%2C51.654%2030.6556549%2C53%2029.000849%2C53%20C27.347043%2C53%2026.0012009%2C51.654%2026.0012009%2C50%20C26.0012009%2C48.346%2027.347043%2C47%2029.000849%2C47%20C30.6556549%2C47%2032.0004971%2C48.346%2032.0004971%2C50%20L32.0004971%2C50%20Z%20M24.0014355%2C50%20C24.0014355%2C52.757%2026.2451723%2C55%2029.000849%2C55%20C31.7575256%2C55%2034.0002625%2C52.757%2034.0002625%2C50%20C34.0002625%2C47.243%2031.7575256%2C45%2029.000849%2C45%20C26.2451723%2C45%2024.0014355%2C47.243%2024.0014355%2C50%20L24.0014355%2C50%20Z%20M48.998503%2C50%20C48.998503%2C48.346%2050.3443451%2C47%2051.9981511%2C47%20C53.652957%2C47%2054.9977992%2C48.346%2054.9977992%2C50%20C54.9977992%2C51.654%2053.652957%2C53%2051.9981511%2C53%20C50.3443451%2C53%2048.998503%2C51.654%2048.998503%2C50%20L48.998503%2C50%20Z%20M56.9975646%2C50%20C56.9975646%2C47.243%2054.7548277%2C45%2051.9981511%2C45%20C49.2424744%2C45%2046.9987376%2C47.243%2046.9987376%2C50%20C46.9987376%2C52.757%2049.2424744%2C55%2051.9981511%2C55%20C54.7548277%2C55%2056.9975646%2C52.757%2056.9975646%2C50%20L56.9975646%2C50%20Z%20M20.0019047%2C14.852%20C20.0019047%2C14.382%2020.3838599%2C14%2020.8538048%2C14%20L45.9988549%2C14%20L45.9988549%2C30.117%20C45.9988549%2C30.604%2045.6029014%2C31%2045.1169584%2C31%20L35.0001452%2C31%20C34.44821%2C31%2034.0002625%2C31.448%2034.0002625%2C32%20L34.0002625%2C37.188%20L29.580781%2C31.394%20C29.3908033%2C31.146%2029.0968378%2C31%2028.7858742%2C31%20L20.8538048%2C31%20C20.3838599%2C31%2020.0019047%2C30.618%2020.0019047%2C30.148%20L20.0019047%2C14.852%20Z%20M20.8538048%2C33%20L28.2909323%2C33%20L34.2062384%2C40.753%20C34.3982158%2C41.006%2034.695181%2C41.147%2035.0001452%2C41.147%20C35.1081325%2C41.147%2035.21512%2C41.13%2035.3211076%2C41.094%20C35.7270599%2C40.957%2036.0000279%2C40.576%2036.0000279%2C40.147%20L36.0000279%2C33%20L45.1169584%2C33%20C46.7067719%2C33%2047.9986203%2C31.707%2047.9986203%2C30.117%20L47.9986203%2C13.524%20C47.9986203%2C12.684%2047.3157004%2C12%2046.4747991%2C12%20L20.8538048%2C12%20C19.2819892%2C12%2018.0021393%2C13.279%2018.0021393%2C14.852%20L18.0021393%2C30.148%20C18.0021393%2C31.721%2019.2819892%2C33%2020.8538048%2C33%20L20.8538048%2C33%20Z%22%20id%3D%22AWS-Chatbot_Icon_64_Squid%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E","title":"Type: 'AWS::Chatbot::SlackChannelConfiguration'\nProperties:\n  ConfigurationName: !!Ref ConfigurationName\n  IamRoleArn: !!GetAtt ChatbotIamRole.Arn\n  LoggingLevel: !!Ref LoggingLevel\n  SlackChannelId: !!Ref SlackChannelId\n  SlackWorkspaceId: !!Ref SlackWorkspaceId\n  SnsTopicArns:\n    - !!ImportValue \n      Ref: SnsTopicArns\n  UserRoleRequired: !!Ref UserRoleRequired\n","resource":{"Type":"AWS::Chatbot::SlackChannelConfiguration","Properties":{"ConfigurationName":{"Ref":"ConfigurationName"},"IamRoleArn":{"Fn::GetAtt":["ChatbotIamRole","Arn"]},"LoggingLevel":{"Ref":"LoggingLevel"},"SlackChannelId":{"Ref":"SlackChannelId"},"SlackWorkspaceId":{"Ref":"SlackWorkspaceId"},"SnsTopicArns":[{"Fn::ImportValue":{"Ref":"SnsTopicArns"}}],"UserRoleRequired":{"Ref":"UserRoleRequired"}}}},{"id":"root.ChatbotIamRole","dependencies":[{"key":"Ref","value":[],"path":"$.Properties.Tags.Value"}],"prefix":"root","hidden":false,"type":"AWS::IAM::Role","label":"ChatbotIamRole","shape":"image","image":"data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20width%3D%2280px%22%20height%3D%2280px%22%20viewBox%3D%220%200%2080%2080%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3C!--%20Generator%3A%20Sketch%2064%20(93537)%20-%20https%3A%2F%2Fsketch.com%20--%3E%0A%20%20%20%20%3Ctitle%3EIcon-Architecture%2F64%2FArch_AWS-Identity-and-Access-Management_64%3C%2Ftitle%3E%0A%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20x1%3D%220%25%22%20y1%3D%22100%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%20id%3D%22linearGradient-1%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23BD0816%22%20offset%3D%220%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstop%20stop-color%3D%22%23FF5252%22%20offset%3D%22100%25%22%3E%3C%2Fstop%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Cg%20id%3D%22Icon-Architecture%2F64%2FArch_AWS-Identity-and-Access-Management_64%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%0A%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Icon-Architecture-BG%2F64%2FSecurity-Identity-Compliance%22%20fill%3D%22url(%23linearGradient-1)%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Crect%20id%3D%22Rectangle%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2280%22%20height%3D%2280%22%3E%3C%2Frect%3E%0A%20%20%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M14%2C59%20L66%2C59%20L66%2C21%20L14%2C21%20L14%2C59%20Z%20M68%2C20%20L68%2C60%20C68%2C60.552%2067.553%2C61%2067%2C61%20L13%2C61%20C12.447%2C61%2012%2C60.552%2012%2C60%20L12%2C20%20C12%2C19.448%2012.447%2C19%2013%2C19%20L67%2C19%20C67.553%2C19%2068%2C19.448%2068%2C20%20L68%2C20%20Z%20M44%2C48%20L59%2C48%20L59%2C46%20L44%2C46%20L44%2C48%20Z%20M57%2C42%20L62%2C42%20L62%2C40%20L57%2C40%20L57%2C42%20Z%20M44%2C42%20L52%2C42%20L52%2C40%20L44%2C40%20L44%2C42%20Z%20M29%2C46%20C29%2C45.449%2028.552%2C45%2028%2C45%20C27.448%2C45%2027%2C45.449%2027%2C46%20C27%2C46.551%2027.448%2C47%2028%2C47%20C28.552%2C47%2029%2C46.551%2029%2C46%20L29%2C46%20Z%20M31%2C46%20C31%2C47.302%2030.161%2C48.401%2029%2C48.816%20L29%2C51%20L27%2C51%20L27%2C48.815%20C25.839%2C48.401%2025%2C47.302%2025%2C46%20C25%2C44.346%2026.346%2C43%2028%2C43%20C29.654%2C43%2031%2C44.346%2031%2C46%20L31%2C46%20Z%20M19%2C53.993%20L36.994%2C54%20L36.996%2C50%20L33%2C50%20L33%2C48%20L36.996%2C48%20L36.998%2C45%20L33%2C45%20L33%2C43%20L36.999%2C43%20L37%2C40.007%20L19.006%2C40%20L19%2C53.993%20Z%20M22%2C38.001%20L34%2C38.006%20L34%2C31%20C34.001%2C28.697%2031.197%2C26.677%2028%2C26.675%20L27.996%2C26.675%20C24.804%2C26.675%2022.004%2C28.696%2022.002%2C31%20L22%2C38.001%20Z%20M17%2C54.992%20L17.006%2C39%20C17.006%2C38.734%2017.111%2C38.48%2017.299%2C38.292%20C17.486%2C38.105%2017.741%2C38%2018.006%2C38%20L20%2C38.001%20L20.002%2C31%20C20.004%2C27.512%2023.59%2C24.675%2027.996%2C24.675%20L28%2C24.675%20C32.412%2C24.677%2036.001%2C27.515%2036%2C31%20L36%2C38.007%20L38%2C38.008%20C38.553%2C38.008%2039%2C38.456%2039%2C39.008%20L38.994%2C55%20C38.994%2C55.266%2038.889%2C55.52%2038.701%2C55.708%20C38.514%2C55.895%2038.259%2C56%2037.994%2C56%20L18%2C55.992%20C17.447%2C55.992%2017%2C55.544%2017%2C54.992%20L17%2C54.992%20Z%20M60%2C36%20L62%2C36%20L62%2C34%20L60%2C34%20L60%2C36%20Z%20M44%2C36%20L55%2C36%20L55%2C34%20L44%2C34%20L44%2C36%20Z%22%20id%3D%22AWS-Identity-and-Access-Management_Icon_64_Squid%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E","title":"Type: 'AWS::IAM::Role'\nProperties:\n  RoleName: !!Sub '${AWS::StackName}-chatbot-role'\n  AssumeRolePolicyDocument:\n    Version: 2012-10-17\n    Statement:\n      - Effect: Allow\n        Principal:\n          Service: chatbot.amazonaws.com\n        Action: 'sts:AssumeRole'\n  Policies:\n    - PolicyName: stack-drift-detected-policy\n      PolicyDocument:\n        Version: 2012-10-17\n        Statement:\n          - Effect: Allow\n            Action:\n              - 'cloudwatch:Describe*'\n              - 'cloudwatch:Get*'\n              - 'cloudwatch:List*'\n            Resource:\n              - '*'\n  Tags:\n    - Key: Name\n      Value: !!Ref EnvironmentName\n","resource":{"Type":"AWS::IAM::Role","Properties":{"RoleName":{"Fn::Sub":"${AWS::StackName}-chatbot-role"},"AssumeRolePolicyDocument":{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"chatbot.amazonaws.com"},"Action":"sts:AssumeRole"}]},"Policies":[{"PolicyName":"stack-drift-detected-policy","PolicyDocument":{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["cloudwatch:Describe*","cloudwatch:Get*","cloudwatch:List*"],"Resource":["*"]}]}}],"Tags":[{"Key":"Name","Value":{"Ref":"EnvironmentName"}}]}}}]);
  var edges = new vis.DataSet([{"from":"root.SlackChannelConfiguration","to":"root.ChatbotIamRole","label":"IamRoleArn","color":{"color":"#c6d279"}}]);
  var nested = [];
  var types = ["AWS::Chatbot::SlackChannelConfiguration","AWS::IAM::Role"];
  var showSidebar = true;
  