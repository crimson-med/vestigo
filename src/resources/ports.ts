export interface port {
    description: string
    port: string
    status: string
    tcp: boolean
    udp: boolean
}
export const ports: Record<string, port | port[]> = {
    '0': {
        description: 'Reserved',
        port: '0',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '1': {
        description: 'TCP Port Service Multiplexer (TCPMUX)',
        port: '1',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2': {
        description: 'CompressNET[2] Management Utility[3]',
        port: '2',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3': {
        description: 'CompressNET[2] Compression Process[4]',
        port: '3',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4': {
        description: 'Unassigned',
        port: '4',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5': {
        description: 'Remote Job Entry',
        port: '5',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '7': {
        description: 'Echo Protocol',
        port: '7',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '8': {
        description: 'Unassigned',
        port: '8',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9': [
        {
            description: 'Discard Protocol',
            port: '9',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Wake-on-LAN',
            port: '9',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '10': {
        description: 'Unassigned',
        port: '10',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '11': {
        description: 'Active Users (systat service)[5][6]',
        port: '11',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '12': {
        description: 'Unassigned',
        port: '12',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '13': {
        description: 'Daytime Protocol (RFC 867)',
        port: '13',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '14': {
        description: 'Unassigned',
        port: '14',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '15': {
        description: 'Previously netstat service[5]',
        port: '15',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '16': {
        description: 'Unassigned',
        port: '16',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '17': {
        description: 'Quote of the Day',
        port: '17',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '18': {
        description: 'Message Send Protocol',
        port: '18',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '19': {
        description: 'Character Generator Protocol (CHARGEN)',
        port: '19',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '20': {
        description: 'FTP data transfer',
        port: '20',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '21': {
        description: 'FTP control (command)',
        port: '21',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '22': {
        description: 'Secure Shell (SSH) — used for secure logins, file transfers (scp, sftp) and port forwarding',
        port: '22',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '23': {
        description: 'Telnet protocol—unencrypted text communications',
        port: '23',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '24': {
        description: 'Priv-mail : any private mail system.',
        port: '24',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '25': {
        description: 'Simple Mail Transfer Protocol (SMTP)—used for e-mail routing between mail servers',
        port: '25',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '26': {
        description: 'Unassigned',
        port: '26',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '27': {
        description: 'NSW User System FE',
        port: '27',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '29': {
        description: 'MSG ICP',
        port: '29',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '33': {
        description: 'Display Support Protocol',
        port: '33',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '35': {
        description: 'Any private printer server protocol',
        port: '35',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '37': {
        description: 'TIME protocol',
        port: '37',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '39': {
        description: 'Resource Location Protocol[7] (RLP)—used for determining the location of higher level services from hosts on a network',
        port: '39',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '40': {
        description: 'Unassigned',
        port: '40',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '42': [
        {
            description: 'ARPA Host Name Server Protocol',
            port: '42',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Windows Internet Name Service',
            port: '42',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '43': {
        description: 'WHOIS protocol',
        port: '43',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '47': {
        description: 'NI FTP[7]',
        port: '47',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '49': {
        description: 'TACACS Login Host protocol',
        port: '49',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '50': {
        description: 'Remote Mail Checking Protocol[8]',
        port: '50',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '51': {
        description: 'IMP Logical Address Maintenance',
        port: '51',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '52': {
        description: 'XNS (Xerox Network Systems) Time Protocol',
        port: '52',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '53': {
        description: 'Domain Name System (DNS)',
        port: '53',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '54': {
        description: 'XNS (Xerox Network Systems) Clearinghouse',
        port: '54',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '55': {
        description: 'ISI Graphics Language (ISI-GL)',
        port: '55',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '56': [
        {
            description: 'XNS (Xerox Network Systems) Authentication',
            port: '56',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Route Access Protocol (RAP)[9]',
            port: '56',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '57': {
        description: 'Mail Transfer Protocol (RFC 780)',
        port: '57',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '58': {
        description: 'XNS (Xerox Network Systems) Mail',
        port: '58',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '64': {
        description: 'CI (Travelport) (formerly Covia) Comms Integrator',
        port: '64',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '67': {
        description: 'Bootstrap Protocol (BOOTP) Server; also used by Dynamic Host Configuration Protocol (DHCP)',
        port: '67',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '68': {
        description: 'Bootstrap Protocol (BOOTP) Client; also used by Dynamic Host Configuration Protocol (DHCP)',
        port: '68',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '69': {
        description: 'Trivial File Transfer Protocol (TFTP)',
        port: '69',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '70': {
        description: 'Gopher protocol',
        port: '70',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '71': {
        description: 'NETRJS protocol',
        port: '71',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '72': {
        description: 'NETRJS protocol',
        port: '72',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '73': {
        description: 'NETRJS protocol',
        port: '73',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '74': {
        description: 'NETRJS protocol',
        port: '74',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '77': {
        description: 'priv-rjs protocol which is considered unsafe by Google Chrome[10]',
        port: '77',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '79': {
        description: 'Finger protocol',
        port: '79',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '80': {
        description: 'Hypertext Transfer Protocol (HTTP)',
        port: '80',
        status: 'Official [11]',
        tcp: true,
        udp: false
    },
    '81': {
        description: 'Torpark—Onion routing',
        port: '81',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '82': {
        description: 'Torpark—Control',
        port: '82',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '88': {
        description: 'Kerberos—authentication system',
        port: '88',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '90': [
        {
            description: 'dnsix (DoD Network Security for Information Exchange) Securit Attribute Token Map',
            port: '90',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'PointCast (dotcom)',
            port: '90',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '99': {
        description: 'WIP Message protocol',
        port: '99',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '100': {
        description: 'CyberGate RAT protocol',
        port: '100',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '101': {
        description: 'NIC host name',
        port: '101',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '102': {
        description: 'ISO-TSAP (Transport Service Access Point) Class 0 protocol;[12] also used by Digital Equipment Corporation DECnet (Phase V+) over TCP/IP',
        port: '102',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '104': {
        description: 'ACR/NEMA Digital Imaging and Communications in Medicine (DICOM)',
        port: '104',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '105': {
        description: 'CCSO Nameserver Protocol (Qi/Ph)',
        port: '105',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '107': {
        description: 'Remote TELNET Service[13] protocol',
        port: '107',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '108': {
        description: 'SNA Gateway Access Server [1]',
        port: '108',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '109': {
        description: 'Post Office Protocol v2 (POP2)',
        port: '109',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '110': {
        description: 'Post Office Protocol v3 (POP3)',
        port: '110',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '111': {
        description: 'ONC RPC (Sun RPC)',
        port: '111',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '113': [
        {
            description: 'Ident—Authentication Service/Identification Protocol,[14] used by IRC servers to identify users',
            port: '113',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Authentication Service[14] (auth)',
            port: '113',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '115': {
        description: 'Simple File Transfer Protocol (SFTP)',
        port: '115',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '117': {
        description: 'UUCP Path Service',
        port: '117',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '118': {
        description: 'SQL (Structured Query Language) Services',
        port: '118',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '119': {
        description: 'Network News Transfer Protocol (NNTP)—retrieval of newsgroup messages',
        port: '119',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '123': {
        description: 'Network Time Protocol (NTP)—used for time synchronization',
        port: '123',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '126': {
        description: 'Formerly Unisys Unitary Login, renamed by Unisys to NXEdit. Used by Unisys Programmer\'s Workbench for Clearpath MCP, an IDE for Unisys MCP software development',
        port: '126',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '135': [
        {
            description: 'DCE endpoint resolution',
            port: '135',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Microsoft EPMAP (End Point Mapper), also known as DCE/RPC Locator service,[15] used to remotely manage services including DHCP server, DNS server and WINS. Also used by DCOM',
            port: '135',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '137': {
        description: 'NetBIOS NetBIOS Name Service',
        port: '137',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '138': {
        description: 'NetBIOS NetBIOS Datagram Service',
        port: '138',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '139': {
        description: 'NetBIOS NetBIOS Session Service',
        port: '139',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '143': {
        description: 'Internet Message Access Protocol (IMAP)—management of email messages',
        port: '143',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '152': {
        description: 'Background File Transfer Program (BFTP)[16]',
        port: '152',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '153': {
        description: 'SGMP, Simple Gateway Monitoring Protocol',
        port: '153',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '156': {
        description: 'SQL Service',
        port: '156',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '158': {
        description: 'DMSP, Distributed Mail Service Protocol[17]',
        port: '158',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '161': {
        description: 'Simple Network Management Protocol (SNMP)',
        port: '161',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '162': {
        description: 'Simple Network Management Protocol Trap (SNMPTRAP)[18]',
        port: '162',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '170': {
        description: 'Print-srv, Network PostScript',
        port: '170',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '175': {
        description: 'VMNET (IBM z/VM, z/OS & z/VSE - Network Job Entry(NJE))',
        port: '175',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '177': {
        description: 'X Display Manager Control Protocol (XDMCP)',
        port: '177',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '179': {
        description: 'BGP (Border Gateway Protocol)',
        port: '179',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '194': {
        description: 'Internet Relay Chat (IRC)',
        port: '194',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '199': {
        description: 'SMUX, SNMP Unix Multiplexer',
        port: '199',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '201': {
        description: 'AppleTalk Routing Maintenance',
        port: '201',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '209': {
        description: 'The Quick Mail Transfer Protocol',
        port: '209',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '210': {
        description: 'ANSI Z39.50',
        port: '210',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '213': {
        description: 'Internetwork Packet Exchange (IPX)',
        port: '213',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '218': {
        description: 'Message posting protocol (MPP)',
        port: '218',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '220': {
        description: 'Internet Message Access Protocol (IMAP), version 3',
        port: '220',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '259': {
        description: 'ESRO, Efficient Short Remote Operations',
        port: '259',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '264': {
        description: 'BGMP, Border Gateway Multicast Protocol',
        port: '264',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '280': {
        description: 'http-mgmt',
        port: '280',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '300': {
        description: 'ThinLinc Web Access',
        port: '300',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '308': {
        description: 'Novastor Online Backup',
        port: '308',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '311': {
        description: 'Mac OS X Server Admin (officially AppleShare IP Web administration)',
        port: '311',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '318': {
        description: 'PKIX TSP, Time Stamp Protocol',
        port: '318',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '319': {
        description: 'Precision time protocol event messages',
        port: '319',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '320': {
        description: 'Precision time protocol general messages',
        port: '320',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '350': {
        description: 'MATIP-Type A, Mapping of Airline Traffic over Internet Protocol',
        port: '350',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '351': {
        description: 'MATIP-Type B, Mapping of Airline Traffic over Internet Protocol',
        port: '351',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '366': {
        description: 'ODMR, On-Demand Mail Relay',
        port: '366',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '369': {
        description: 'Rpc2portmap',
        port: '369',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '370': [
        {
            description: 'codaauth2—Coda authentication server',
            port: '370',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'codaauth2—Coda authentication server',
            port: '370',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'securecast1—Outgoing packets to NAI\'s servers [19][dead link]',
            port: '370',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '371': {
        description: 'ClearCase albd',
        port: '371',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '383': {
        description: 'HP data alarm manager',
        port: '383',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '384': {
        description: 'A Remote Network Server System',
        port: '384',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '387': {
        description: 'AURP, AppleTalk Update-based Routing Protocol[20]',
        port: '387',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '389': {
        description: 'Lightweight Directory Access Protocol (LDAP)',
        port: '389',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '399': {
        description: 'Digital Equipment Corporation DECnet (Phase V+) over TCP/IP',
        port: '399',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '401': {
        description: 'UPS Uninterruptible Power Supply',
        port: '401',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '427': {
        description: 'Service Location Protocol (SLP)',
        port: '427',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '443': {
        description: 'Hypertext Transfer Protocol over TLS/SSL (HTTPS)',
        port: '443',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '444': {
        description: 'SNPP, Simple Network Paging Protocol (RFC 1568)',
        port: '444',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '445': [
        {
            description: 'Microsoft-DS Active Directory, Windows shares',
            port: '445',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Microsoft-DS SMB file sharing',
            port: '445',
            status: 'Official',
            tcp: true,
            udp: false
        }
    ],
    '464': {
        description: 'Kerberos Change/Set password',
        port: '464',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '465': {
        description: 'URL Rendesvous Directory for SSM (Cisco protocol)',
        port: '465',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '475': {
        description: 'tcpnethaspsrv (Aladdin Knowledge Systems Hasp services, TCP/IP version)',
        port: '475',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '491': {
        description: 'GoGlobal TCP/IP version)',
        port: '491',
        status: '',
        tcp: true,
        udp: true
    },
    '497': {
        description: 'Dantz Retrospect',
        port: '497',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '500': {
        description: 'Internet Security Association and Key Management Protocol (ISAKMP)',
        port: '500',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '502': {
        description: 'Modbus, Protocol',
        port: '502',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '504': {
        description: 'Citadel—multiservice protocol for dedicated clients for the Citadel groupware system',
        port: '504',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '512': [
        {
            description: 'Rexec, Remote Process Execution',
            port: '512',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'comsat, together with biff',
            port: '512',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '513': [
        {
            description: 'rlogin',
            port: '513',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Who[21]',
            port: '513',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '514': [
        {
            description: 'Shell—used to execute non-interactive commands on a remote system (Remote Shell, rsh, remsh)',
            port: '514',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Syslog—used for system logging',
            port: '514',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '515': {
        description: 'Line Printer Daemon—print service',
        port: '515',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '517': {
        description: 'Talk',
        port: '517',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '518': {
        description: 'NTalk',
        port: '518',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '520': [
        {
            description: 'efs, extended file name server',
            port: '520',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Routing Information Protocol (RIP)',
            port: '520',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '524': {
        description: 'NetWare Core Protocol (NCP) is used for a variety things such as access to primary NetWare server resources, Time Synchronization, etc.',
        port: '524',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '525': {
        description: 'Timed, Timeserver',
        port: '525',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '530': {
        description: 'RPC',
        port: '530',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '531': {
        description: 'AOL Instant Messenger',
        port: '531',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '532': {
        description: 'netnews',
        port: '532',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '533': {
        description: 'netwall, For Emergency Broadcasts',
        port: '533',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '540': {
        description: 'UUCP (Unix-to-Unix Copy Protocol)',
        port: '540',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '542': {
        description: 'commerce (Commerce Applications)',
        port: '542',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '543': {
        description: 'klogin, Kerberos login',
        port: '543',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '544': {
        description: 'kshell, Kerberos Remote shell',
        port: '544',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '545': {
        description: 'OSIsoft PI (VMS), OSISoft PI Server Client Access',
        port: '545',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '546': {
        description: 'DHCPv6 client',
        port: '546',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '547': {
        description: 'DHCPv6 server',
        port: '547',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '548': {
        description: 'Apple Filing Protocol (AFP) over TCP',
        port: '548',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '550': {
        description: 'new-rwho, new-who[21]',
        port: '550',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '554': {
        description: 'Real Time Streaming Protocol (RTSP)',
        port: '554',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '556': {
        description: 'Remotefs, RFS, rfs_server',
        port: '556',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '560': {
        description: 'rmonitor, Remote Monitor',
        port: '560',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '561': {
        description: 'monitor',
        port: '561',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '563': {
        description: 'NNTP protocol over TLS/SSL (NNTPS)',
        port: '563',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '587': {
        description: 'e-mail message submission[22] (SMTP)',
        port: '587',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '591': {
        description: 'FileMaker 6.0 (and later) Web Sharing (HTTP Alternate, also see port 80)',
        port: '591',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '593': {
        description: 'HTTP RPC Ep Map, Remote procedure call over Hypertext Transfer Protocol, often used by Distributed Component Object Model services and Microsoft Exchange Server',
        port: '593',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '604': {
        description: 'TUNNEL profile,[23] a protocol for BEEP peers to form an application layer tunnel',
        port: '604',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '623': {
        description: 'ASF Remote Management and Control Protocol (ASF-RMCP)',
        port: '623',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '631': [
        {
            description: 'Internet Printing Protocol (IPP)',
            port: '631',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Common Unix Printing System (CUPS)',
            port: '631',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '635': {
        description: 'RLZ DBase',
        port: '635',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '636': {
        description: 'Lightweight Directory Access Protocol over TLS/SSL (LDAPS)',
        port: '636',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '639': {
        description: 'MSDP, Multicast Source Discovery Protocol',
        port: '639',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '641': {
        description: 'SupportSoft Nexus Remote Command (control/listening): A proxy gateway connecting remote control traffic',
        port: '641',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '646': {
        description: 'LDP, Label Distribution Protocol, a routing protocol used in MPLS networks',
        port: '646',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '647': {
        description: 'DHCP Failover protocol[24]',
        port: '647',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '648': {
        description: 'RRP (Registry Registrar Protocol)[25]',
        port: '648',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '651': {
        description: 'IEEE-MMS',
        port: '651',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '653': {
        description: 'SupportSoft Nexus Remote Command (data): A proxy gateway connecting remote control traffic',
        port: '653',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '654': {
        description: 'Media Management System (MMS) Media Management Protocol (MMP)[26]',
        port: '654',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '657': {
        description: 'IBM RMC (Remote monitoring and Control) protocol, used by System p5 AIX Integrated Virtualization Manager (IVM)[27] and Hardware Management Console to connect managed logical partitions (LPAR) to enable dynamic partition reconfiguration',
        port: '657',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '660': {
        description: 'Mac OS X Server administration',
        port: '660',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '666': [
        {
            description: 'Doom, first online first-person shooter',
            port: '666',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'airserv-ng, aircrack-ng\'s server for remote-controlling wireless devices',
            port: '666',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '674': {
        description: 'ACAP (Application Configuration Access Protocol)',
        port: '674',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '688': {
        description: 'REALM-RUSD (ApplianceWare Server Appliance Management Protocol)',
        port: '688',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '691': {
        description: 'MS Exchange Routing',
        port: '691',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '694': {
        description: 'Linux-HA High availability Heartbeat',
        port: '694',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '695': {
        description: 'IEEE-MMS-SSL (IEEE Media Management System over SSL)[28]',
        port: '695',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '698': {
        description: 'OLSR (Optimized Link State Routing)',
        port: '698',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '700': {
        description: 'EPP (Extensible Provisioning Protocol), a protocol for communication between domain name registries and registrars (RFC 5734)',
        port: '700',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '701': {
        description: 'LMP (Link Management Protocol (Internet)),[29] a protocol that runs between a pair of nodes and is used to manage traffic engineering (TE) links',
        port: '701',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '702': {
        description: 'IRIS[30][31] (Internet Registry Information Service) over BEEP (Blocks Extensible Exchange Protocol)[32] (RFC 3983)',
        port: '702',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '706': {
        description: 'Secure Internet Live Conferencing (SILC)',
        port: '706',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '711': {
        description: 'Cisco Tag Distribution Protocol[33][34][35]—being replaced by the MPLS Label Distribution Protocol[36]',
        port: '711',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '712': {
        description: 'Topology Broadcast based on Reverse-Path Forwarding routing protocol (TBRPF) (RFC 3684)',
        port: '712',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '749': {
        description: 'Kerberos (protocol) administration',
        port: '749',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '750': {
        description: 'kerberos-iv, Kerberos version IV',
        port: '750',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '751': {
        description: 'kerberos_master, Kerberos authentication',
        port: '751',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '752': {
        description: 'passwd_server, Kerberos Password (kpasswd) server',
        port: '752',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '753': [
        {
            description: 'Reverse Routing Header (rrh)[37]',
            port: '753',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Reverse Routing Header (rrh)',
            port: '753',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'userreg_server, Kerberos userreg server',
            port: '753',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '754': [
        {
            description: 'tell send',
            port: '754',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'krb5_prop, Kerberos v5 slave propagation',
            port: '754',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'tell send',
            port: '754',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '760': {
        description: 'krbupdate [kreg], Kerberos registration',
        port: '760',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '782': {
        description: 'Conserver serial-console management server',
        port: '782',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '783': {
        description: 'SpamAssassin spamd daemon',
        port: '783',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '800': {
        description: 'mdbe daemon',
        port: '800',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '808': {
        description: 'Microsoft Net.TCP Port Sharing Service',
        port: '808',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '829': {
        description: 'Certificate Management Protocol[38]',
        port: '829',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '843': {
        description: 'Adobe Flash[39]',
        port: '843',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '847': {
        description: 'DHCP Failover protocol',
        port: '847',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '848': {
        description: 'Group Domain Of Interpretation (GDOI) protocol',
        port: '848',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '860': {
        description: 'iSCSI (RFC 3720)',
        port: '860',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '861': {
        description: 'OWAMP control (RFC 4656)',
        port: '861',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '862': {
        description: 'TWAMP control (RFC 5357)',
        port: '862',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '873': {
        description: 'rsync file synchronization protocol',
        port: '873',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '888': {
        description: 'cddbp, CD DataBase (CDDB) protocol (CDDBP)',
        port: '888',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '897': {
        description: 'Brocade SMI-S RPC',
        port: '897',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '898': {
        description: 'Brocade SMI-S RPC SSL',
        port: '898',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '901': [
        {
            description: 'Samba Web Administration Tool (SWAT)',
            port: '901',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'VMware Virtual Infrastructure Client (UDP from server being managed to management console)',
            port: '901',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'VMware Virtual Infrastructure Client (UDP from server being managed to management console)',
            port: '901',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '902': [
        {
            description: 'ideafarm-door',
            port: '902',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'VMware Server Console (TCP from management console to server being Managed)',
            port: '902',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'ideafarm-door',
            port: '902',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'VMware Server Console (UDP from server being managed to management console)',
            port: '902',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '903': {
        description: 'VMware Remote Console [40]',
        port: '903',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '904': {
        description: 'VMware Server Alternate (if 902 is in use, i.e. SUSE linux)',
        port: '904',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '911': {
        description: 'Network Console on Acid (NCA)—local tty redirection over OpenSSH',
        port: '911',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '944': {
        description: 'Network File System (protocol) Service',
        port: '944',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '953': {
        description: 'Domain Name System (DNS) RNDC Service',
        port: '953',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '973': {
        description: 'Network File System (protocol) over IPv6 Service',
        port: '973',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '981': {
        description: 'SofaWare Technologies Remote HTTPS management for firewall devices running embedded Check Point FireWall-1 software',
        port: '981',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '987': {
        description: 'Microsoft Corporation Microsoft Windows SBS SharePoint',
        port: '987',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '989': {
        description: 'FTPS Protocol (data): FTP over TLS/SSL',
        port: '989',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '990': {
        description: 'FTPS Protocol (control): FTP over TLS/SSL',
        port: '990',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '991': {
        description: 'NAS (Netnews Administration System)[41]',
        port: '991',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '992': {
        description: 'TELNET protocol over TLS/SSL',
        port: '992',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '993': {
        description: 'Internet Message Access Protocol over TLS/SSL (IMAPS)',
        port: '993',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '995': {
        description: 'Post Office Protocol 3 over TLS/SSL (POP3S)',
        port: '995',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '999': {
        description: 'ScimoreDB Database System',
        port: '999',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1002': {
        description: 'Opsware agent (aka cogbot)',
        port: '1002',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1010': {
        description: 'ThinLinc Web Administration',
        port: '1010',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1023': {
        description: 'Reserved[1]',
        port: '1023',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1024': {
        description: 'Reserved[1]',
        port: '1024',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1025': {
        description: 'NFS or IIS or Teradata',
        port: '1025',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1026': {
        description: 'Often used by Microsoft DCOM services',
        port: '1026',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1027': {
        description: 'Native IPv6 behind IPv4-to-IPv4 NAT Customer Premises Equipment (6a44)[42]',
        port: '1027',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '1029': {
        description: 'Often used by Microsoft DCOM services',
        port: '1029',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1058': {
        description: 'nim, IBM AIX Network Installation Manager (NIM)',
        port: '1058',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1059': {
        description: 'nimreg, IBM AIX Network Installation Manager (NIM)',
        port: '1059',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1080': {
        description: 'SOCKS proxy',
        port: '1080',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1085': {
        description: 'WebObjects',
        port: '1085',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1098': {
        description: 'rmiactivation, RMI Activation',
        port: '1098',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1099': {
        description: 'rmiregistry, RMI Registry',
        port: '1099',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1109': [
        {
            description: 'Reserved[1]',
            port: '1109',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Kerberos Post Office Protocol (KPOP)',
            port: '1109',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '1110': {
        description: 'EasyBits School network discovery protocol (for Intel\'s CMPC platform)',
        port: '1110',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1119': {
        description: 'Used by some Blizzard games[43]',
        port: '1119',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '1140': {
        description: 'AutoNOC protocol',
        port: '1140',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1167': {
        description: 'phone, conference calling',
        port: '1167',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1169': {
        description: 'Tripwire',
        port: '1169',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1176': {
        description: 'Perceptive Automation Indigo Home automation server',
        port: '1176',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1182': {
        description: 'AcceleNet Intelligent Transfer Protocol',
        port: '1182',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1194': {
        description: 'OpenVPN',
        port: '1194',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1198': {
        description: 'The cajo project Free dynamic transparent distributed computing in Java',
        port: '1198',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1200': [
        {
            description: 'scol, protocol used by SCOL 3D virtual worlds server to answer world name resolution client request[44]',
            port: '1200',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'scol, protocol used by SCOL 3D virtual worlds server to answer world name resolution client request',
            port: '1200',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'Steam Friends Applet',
            port: '1200',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '1214': {
        description: 'Kazaa',
        port: '1214',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1217': {
        description: 'Uvora Online',
        port: '1217',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1220': {
        description: 'QuickTime Streaming Server administration',
        port: '1220',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1223': {
        description: 'TGP, TrulyGlobal Protocol, also known as "The Gur Protocol" (named for Gur Kimchi of TrulyGlobal)',
        port: '1223',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1232': {
        description: 'first-defense, Remote systems monitoring service from Nexum, Inc',
        port: '1232',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1234': {
        description: 'VLC media player default port for UDP/RTP stream',
        port: '1234',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1236': {
        description: 'Symantec BindView Control UNIX Default port for TCP management server connections',
        port: '1236',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1241': {
        description: 'Nessus Security Scanner',
        port: '1241',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1270': {
        description: 'Microsoft System Center Operations Manager (SCOM) (formerly Microsoft Operations Manager (MOM)) agent',
        port: '1270',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1293': {
        description: 'IPSec (Internet Protocol Security)',
        port: '1293',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1301': {
        description: 'Palmer Performance OBDNet',
        port: '1301',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1309': {
        description: 'Altera Quartus jtagd',
        port: '1309',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1311': {
        description: 'Dell OpenManage HTTPS',
        port: '1311',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1313': {
        description: 'Xbiim (Canvii server)[citation needed]',
        port: '1313',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1314': {
        description: 'Festival Speech Synthesis System',
        port: '1314',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1319': [
        {
            description: 'AMX ICSP',
            port: '1319',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'AMX ICSP',
            port: '1319',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '1337': [
        {
            description: 'Men and Mice DNS',
            port: '1337',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'Men and Mice DNS',
            port: '1337',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'WASTE Encrypted File Sharing Program',
            port: '1337',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '1344': {
        description: 'Internet Content Adaptation Protocol',
        port: '1344',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1352': {
        description: 'IBM Lotus Notes/Domino[45] (RPC) protocol',
        port: '1352',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1387': {
        description: 'cadsi-lm, LMS International (formerly Computer Aided Design Software, Inc. (CADSI)) LM',
        port: '1387',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1414': {
        description: 'IBM WebSphere MQ (formerly known as MQSeries)',
        port: '1414',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1417': {
        description: 'Timbuktu Service 1 Port',
        port: '1417',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1418': {
        description: 'Timbuktu Service 2 Port',
        port: '1418',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1419': {
        description: 'Timbuktu Service 3 Port',
        port: '1419',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1420': {
        description: 'Timbuktu Service 4 Port',
        port: '1420',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1431': {
        description: 'Reverse Gossip Transport Protocol (RGTP), used to access a General-purpose Reverse-Ordered Gossip Gathering System (GROGGS) bulletin board, such as that implemented on the Cambridge University\'s Phoenix system',
        port: '1431',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1433': {
        description: 'MSSQL (Microsoft SQL Server database management system) Server',
        port: '1433',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1434': {
        description: 'MSSQL (Microsoft SQL Server database management system) Monitor',
        port: '1434',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1470': {
        description: 'Solarwinds Kiwi Log Server',
        port: '1470',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1494': {
        description: 'Citrix XenApp Independent Computing Architecture (ICA) thin client protocol[46]',
        port: '1494',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1500': {
        description: 'NetGuard GuardianPro firewall (NT4-based) Remote Management',
        port: '1500',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1501': {
        description: 'NetGuard GuardianPro firewall (NT4-based) Authentication Client',
        port: '1501',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1503': {
        description: 'Windows Live Messenger (Whiteboard and Application Sharing)',
        port: '1503',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '1512': {
        description: 'Microsoft Windows Internet Name Service (WINS)',
        port: '1512',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1513': {
        description: 'Garena Garena Gaming Client',
        port: '1513',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1521': [
        {
            description: 'nCube License Manager',
            port: '1521',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Oracle database default listener, in future releases official port 2483',
            port: '1521',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '1524': {
        description: 'ingreslock, ingres',
        port: '1524',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1526': {
        description: 'Oracle database common alternative for listener',
        port: '1526',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1527': {
        description: 'Apache Derby Network Server default port',
        port: '1527',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1533': {
        description: 'IBM Sametime IM—Virtual Places Chat Microsoft SQL Server',
        port: '1533',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1534': {
        description: 'Eclipse Target Communication Framework (TCF) agent discovery[47]',
        port: '1534',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1547': {
        description: 'Laplink',
        port: '1547',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1550': [
        {
            description: '3m-image-lm Image Storage license manager 3M Company',
            port: '1550',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Gadu-Gadu (direct client-to-client)',
            port: '1550',
            status: 'Unofficial',
            tcp: false,
            udp: false
        }
    ],
    '1581': {
        description: 'MIL STD 2045-47001 VMF',
        port: '1581',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '1583': {
        description: 'Pervasive PSQL',
        port: '1583',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1589': {
        description: 'Cisco VQP (VLAN Query Protocol) / VMPS',
        port: '1589',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1590': {
        description: 'GE Smallworld Datastore Server (SWMFS/Smallworld Master Filesystem)[citation needed]',
        port: '1590',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1627': {
        description: 'iSketch[citation needed]',
        port: '1627',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '1645': {
        description: 'radius auth, RADIUS authentication protocol (default for Cisco and Juniper Networks RADIUS servers, but see port 1812 below)',
        port: '1645',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '1646': {
        description: 'radius acct, RADIUS authentication protocol (default for Cisco and Juniper Networks RADIUS servers, but see port 1813 below)',
        port: '1646',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '1666': {
        description: 'Perforce',
        port: '1666',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1677': {
        description: 'Novell GroupWise clients in client/server access mode',
        port: '1677',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1688': {
        description: 'Microsoft Key Management Service for KMS Windows Activation',
        port: '1688',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1700': {
        description: 'Cisco RADIUS Change of Authorization for TrustSec[citation needed]',
        port: '1700',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1701': {
        description: 'Layer 2 Forwarding Protocol (L2F) & Layer 2 Tunneling Protocol (L2TP)',
        port: '1701',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '1707': [
        {
            description: 'Windward Studios',
            port: '1707',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Romtoc Interactive Modular Multiplayer Client-Server Online Application Interface & Layer 2 Tunneling Protocol (L2TP)',
            port: '1707',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '1716': {
        description: 'America\'s Army Massively multiplayer online game (MMO)',
        port: '1716',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1719': {
        description: 'H.323 Registration and alternate communication',
        port: '1719',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '1720': {
        description: 'H.323 Call signalling',
        port: '1720',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1723': {
        description: 'Microsoft Point-to-Point Tunneling Protocol (PPTP)',
        port: '1723',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1725': {
        description: 'Valve Steam Client',
        port: '1725',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1755': {
        description: 'Microsoft Media Services (MMS, ms-streaming)',
        port: '1755',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1761': [
        {
            description: 'cft-0',
            port: '1761',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'cft-0',
            port: '1761',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Novell Zenworks Remote Control utility',
            port: '1761',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '1762': {
        description: 'cft-1 to cft-7',
        port: '1762–1768',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1776': {
        description: 'Federal Emergency Management Information Systemhttp://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml',
        port: '1776',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1792': {
        description: 'Moby[citation needed]',
        port: '1792',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '1801': {
        description: 'Microsoft Message Queuing',
        port: '1801',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1812': {
        description: 'radius, RADIUS authentication protocol',
        port: '1812',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1813': {
        description: 'radacct, RADIUS accounting protocol',
        port: '1813',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1863': {
        description: 'MSNP (Microsoft Notification Protocol), used by the Microsoft Messenger service and a number of Instant Messaging clients',
        port: '1863',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1883': {
        description: 'MQ Telemetry Transport (MQTT), formerly known as MQIsdp (MQSeries SCADA protocol)',
        port: '1883',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1886': {
        description: 'Leonardo over IP Pro2col Ltd',
        port: '1886',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1900': {
        description: 'Microsoft SSDP Enables discovery of UPnP devices',
        port: '1900',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '1920': {
        description: 'IBM Tivoli monitoring console',
        port: '1920',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1935': {
        description: 'Adobe Systems Macromedia Flash Real Time Messaging Protocol (RTMP) "plain" protocol',
        port: '1935',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1947': {
        description: 'SentinelSRM (hasplm), Aladdin HASP License Manager',
        port: '1947',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1967': {
        description: 'Cisco IOS IP Service Level Agreements (IP SLAs) Control Protocol[citation needed]',
        port: '1967',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '1970': {
        description: 'Netop Business Solutions Netop Remote Control',
        port: '1970',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1971': {
        description: 'Netop Business Solutions Netop School',
        port: '1971',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1972': {
        description: 'InterSystems Caché',
        port: '1972',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1975': {
        description: 'Cisco TCO (Documentation)',
        port: '1975–1977',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '1984': {
        description: 'Big Brother and related Xymon (formerly Hobbit) System and Network Monitor',
        port: '1984',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '1985': {
        description: 'Cisco HSRP',
        port: '1985',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '1994': {
        description: 'Cisco STUN-SDLC (Serial Tunneling—Synchronous Data Link Control) protocol',
        port: '1994',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '1997': {
        description: 'Chizmo Networks Transfer Tool[citation needed]',
        port: '1997',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '1998': {
        description: 'Cisco X.25 over TCP (XOT) service',
        port: '1998',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2000': {
        description: 'Cisco SCCP (Skinny)',
        port: '2000',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2001': {
        description: 'CAPTAN Test Stand System',
        port: '2001',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2002': {
        description: 'Secure Access Control Server (ACS) for Windows[citation needed]',
        port: '2002',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2010': {
        description: 'Artemis: Spaceship Bridge Simulator default port',
        port: '2010',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2012': {
        description: 'Remoticus Server',
        port: '2012-2013',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2030': {
        description: 'Oracle services for Microsoft Transaction Server',
        port: '2030',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '2031': {
        description: 'mobrien-chat(http://chat.mobrien.com:2031)',
        port: '2031',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2041': {
        description: 'Mail.Ru Agent communication protocol[citation needed]',
        port: '2041',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2049': [
        {
            description: 'Network File System',
            port: '2049',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'shilp',
            port: '2049',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '2053': {
        description: 'knetd Kerberos de-multiplexor',
        port: '2053',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2056': {
        description: 'Civilization 4 multiplayer',
        port: '2056',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2074': {
        description: 'Vertel VMF SA (i.e. App.. SpeakFreely)',
        port: '2074',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2080': {
        description: 'Autodesk NLM (FLEXlm)',
        port: '2080',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2082': [
        {
            description: 'Infowave Mobility Server',
            port: '2082',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'CPanel default',
            port: '2082',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '2083': [
        {
            description: 'Secure Radius Service (radsec)',
            port: '2083',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'CPanel default SSL',
            port: '2083',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '2086': [
        {
            description: 'GNUnet',
            port: '2086',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'WebHost Manager default',
            port: '2086',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '2087': {
        description: 'WebHost Manager default SSL',
        port: '2087',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2095': {
        description: 'CPanel default Web mail',
        port: '2095',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2096': {
        description: 'CPanel default SSL Web mail',
        port: '2096',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2102': {
        description: 'zephyr-srv Project Athena Zephyr Notification Service server',
        port: '2102',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2103': {
        description: 'zephyr-clt Project Athena Zephyr Notification Service serv-hm connection',
        port: '2103',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2104': {
        description: 'zephyr-hm Project Athena Zephyr Notification Service hostmanager',
        port: '2104',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2105': [
        {
            description: 'IBM MiniPay',
            port: '2105',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'eklogin Kerberos encrypted remote login (rlogin)',
            port: '2105',
            status: 'Unofficial',
            tcp: true,
            udp: true
        },
        {
            description: 'zephyr-hm-srv Project Athena Zephyr Notification Service hm-serv connection (should use port 2102)',
            port: '2105',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '2115': {
        description: 'MIS Department',
        port: '2115',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '2121': {
        description: 'FTP proxy[citation needed]',
        port: '2121',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2142': {
        description: 'TDMoIP (RFC 5087)',
        port: '2142',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '2144': {
        description: 'Iron Mountain LiveVault Agent[citation needed]',
        port: '2144',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2145': {
        description: 'Iron Mountain LiveVault Agent[citation needed]',
        port: '2145',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2156': {
        description: 'Talari Reliable Protocol',
        port: '2156',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '2160': {
        description: 'APC Agent',
        port: '2160',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2161': {
        description: 'APC Agent',
        port: '2161',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2181': {
        description: 'EForward-document transport system',
        port: '2181',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2190': {
        description: 'TiVoConnect Beacon[citation needed]',
        port: '2190',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2195': {
        description: 'Apple Push Notification service Link',
        port: '2195',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2196': {
        description: 'Apple Push Notification - Feedback Link',
        port: '2196',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2200': {
        description: 'Tuxanci game server[48]',
        port: '2200',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2210': [
        {
            description: 'NOAAPORT Broadcast Network',
            port: '2210',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'NOAAPORT Broadcast Network',
            port: '2210',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'MikroTik Remote management for "The Dude"',
            port: '2210',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '2211': [
        {
            description: 'EMWIN',
            port: '2211',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'EMWIN',
            port: '2211',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'MikroTik Secure management for "The Dude"',
            port: '2211',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '2212': [
        {
            description: 'LeeCO POS Server Service',
            port: '2212',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'LeeCO POS Server Service',
            port: '2212',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Port-A-Pour Remote WinBatch',
            port: '2212',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '2219': {
        description: 'NetIQ NCAP Protocol',
        port: '2219',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2220': {
        description: 'NetIQ End2End',
        port: '2220',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2221': {
        description: 'ESET Anti-virus updates',
        port: '2221',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2222': {
        description: 'DirectAdmin default & ESET Remote Administration',
        port: '2222',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2223': {
        description: 'Microsoft Office OS X antipiracy network monitor[citation needed]',
        port: '2223',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2261': {
        description: 'CoMotion Master',
        port: '2261',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2262': {
        description: 'CoMotion Backup',
        port: '2262',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2301': {
        description: 'HP System Management Redirect to port 2381[citation needed]',
        port: '2301',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2302': [
        {
            description: 'ArmA multiplayer (default for game)',
            port: '2302',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Halo: Combat Evolved multiplayer',
            port: '2302',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '2303': {
        description: 'ArmA multiplayer (default for server reporting) (default port for game +1)',
        port: '2303',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2305': {
        description: 'ArmA multiplayer (default for VoN) (default port for game +3)',
        port: '2305',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2323': {
        description: 'Philips TVs based on jointSPACE [49]',
        port: '2323',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2369': {
        description: 'Default for BMC Software Control-M/Server—Configuration Agent, though often changed during installation',
        port: '2369',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2370': {
        description: 'Default for BMC Software Control-M/Server—to allow the Control-M/Enterprise Manager to connect to the Control-M/Server, though often changed during installation',
        port: '2370',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2379': {
        description: 'KGS Go Server',
        port: '2379',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2381': {
        description: 'HP Insight Manager default for Web server[citation needed]',
        port: '2381',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2399': {
        description: 'FileMaker Data Access Layer (ODBC/JDBC)',
        port: '2399',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2401': {
        description: 'CVS version control system',
        port: '2401',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2404': {
        description: 'IEC 60870-5 -104, used to send electric power telecontrol messages between two systems via directly connected data circuits',
        port: '2404',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2420': {
        description: 'Westell Remote Access',
        port: '2420',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '2424': {
        description: 'OrientDB database listening for Binary client connections',
        port: '2424',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2427': {
        description: 'Cisco MGCP',
        port: '2427',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '2447': {
        description: 'ovwdb—OpenView Network Node Manager (NNM) daemon',
        port: '2447',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2463': {
        description: 'LSI RAID Management formerly Symbios Logic',
        port: '2463',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2480': {
        description: 'OrientDB database listening for HTTP client connections',
        port: '2480',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2483': {
        description: 'Oracle database listening for unsecure client connections to the listener, replaces port 1521',
        port: '2483',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2484': {
        description: 'Oracle database listening for SSL client connections to the listener',
        port: '2484',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2500': {
        description: 'THEÒSMESSENGER listening for TheòsMessenger client connections',
        port: '2500',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2501': {
        description: 'TheosNet-Admin listening for TheòsMessenger client connections',
        port: '2501',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2518': {
        description: 'Willy',
        port: '2518',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2525': {
        description: 'SMTP alternate[citation needed]',
        port: '2525',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2535': {
        description: 'MADCAP - Multicast Address Dynamic Client Allocation Protocol',
        port: '2535',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2546': {
        description: 'EVault data protection services',
        port: '2546',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '2593': {
        description: 'RunUO—Ultima Online server',
        port: '2593',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '2598': {
        description: 'new ICA (Citrix) —when Session Reliability is enabled, TCP port 2598 replaces port 1494[46]',
        port: '2598',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2599': {
        description: 'SonicWALL anti-spam traffic between Remote Analyzer (RA) and Control Center (CC)',
        port: '2599',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2610': {
        description: 'TrackiT mobile device monitoring',
        port: '2610',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2612': {
        description: 'QPasa from MQSoftware',
        port: '2612',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2636': {
        description: 'Solve Service',
        port: '2636',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2638': {
        description: 'Sybase database listener[citation needed]',
        port: '2638',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2641': {
        description: 'HDL Server from CNRI',
        port: '2641',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2642': {
        description: 'Tragic',
        port: '2642',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2698': {
        description: 'Citel / MCK IVPIP',
        port: '2698',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2700': {
        description: 'KnowShowGo P2P',
        port: '2700–2800',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2710': [
        {
            description: 'XBT Tracker',
            port: '2710',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'XBT Tracker experimental UDP tracker extension',
            port: '2710',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Knuddels.de[citation needed]',
            port: '2710',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '2735': {
        description: 'NetIQ Monitor Console',
        port: '2735',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2809': [
        {
            description: 'corbaloc:iiop URL, per the CORBA 3.0.3 specification',
            port: '2809',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'IBM WebSphere Application Server (WAS) Bootstrap/rmi default',
            port: '2809',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'corbaloc:iiop URL, per the CORBA 3.0.3 specification.',
            port: '2809',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '2811': {
        description: 'gsi ftp, per the GridFTP specification',
        port: '2811',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2827': {
        description: 'I2P Basic Open Bridge API',
        port: '2827',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '2868': {
        description: 'Norman Proprietary Event Protocol NPEP',
        port: '2868',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2944': {
        description: 'Megaco text H.248',
        port: '2944',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2945': {
        description: 'Megaco binary (ASN.1) H.248',
        port: '2945',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '2947': {
        description: 'gpsd GPS daemon',
        port: '2947',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '2948': {
        description: 'WAP-push Multimedia Messaging Service (MMS)',
        port: '2948',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2949': {
        description: 'WAP-pushsecure Multimedia Messaging Service (MMS)',
        port: '2949',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '2967': {
        description: 'Symantec AntiVirus Corporate Edition',
        port: '2967',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3000': [
        {
            description: 'Miralix License server[citation needed]',
            port: '3000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Cloud9 Integrated Development Environment server',
            port: '3000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Distributed Interactive Simulation (DIS), modifiable default',
            port: '3000',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Ruby on Rails development default[50]',
            port: '3000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '3001': [
        {
            description: 'Miralix Phone Monitor[citation needed]',
            port: '3001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Opsware server (Satellite)',
            port: '3001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '3002': {
        description: 'Miralix CSTA[citation needed]',
        port: '3002',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3003': {
        description: 'Miralix GreenBox API[citation needed]',
        port: '3003',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3004': {
        description: 'Miralix InfoLink[citation needed]',
        port: '3004',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3005': {
        description: 'Miralix TimeOut[citation needed]',
        port: '3005',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3006': {
        description: 'Miralix SMS Client Connector[citation needed]',
        port: '3006',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3007': {
        description: 'Miralix OM Server[citation needed]',
        port: '3007',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3008': {
        description: 'Miralix Proxy[citation needed]',
        port: '3008',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3017': {
        description: 'Miralix IVR and Voicemail[citation needed]',
        port: '3017',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3025': {
        description: 'netpd.org[citation needed]',
        port: '3025',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3030': {
        description: 'NetPanzer',
        port: '3030',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '3040': {
        description: 'PandaROM Update Service Port',
        port: '3040',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3050': {
        description: 'gds_db (Interbase/Firebird)',
        port: '3050',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3051': {
        description: 'Galaxy Server (Gateway Ticketing Systems)',
        port: '3051',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3052': {
        description: 'APC PowerChute Network [1]',
        port: '3052',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3074': {
        description: 'NAT / Xbox LIVE and/or Games for Windows - LIVE',
        port: '3074',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3100': {
        description: 'SMAUSA OpCon Scheduler as the default listen port[citation needed]',
        port: '3100',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3101': {
        description: 'BlackBerry Enterprise Server communication to cloud',
        port: '3101',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3119': {
        description: 'D2000 Entis/Actis Application server',
        port: '3119',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3128': [
        {
            description: 'Web caches and the default for the Squid (software)',
            port: '3128',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Tatsoft default client connection[citation needed]',
            port: '3128',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '3141': {
        description: 'devpi Python package server [51]',
        port: '3141',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3162': {
        description: 'SFLM (Standard Floating License Manager)',
        port: '3162',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3225': {
        description: 'FCIP (Fiber Channel over Internet Protocol)',
        port: '3225',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3233': {
        description: 'WhiskerControl research control protocol',
        port: '3233',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3235': {
        description: 'Galaxy Network Service (Gateway Ticketing Systems)',
        port: '3235',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3260': {
        description: 'iSCSI target',
        port: '3260',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3268': {
        description: 'msft-gc, Microsoft Global Catalog (LDAP service which contains data from Active Directory forests)',
        port: '3268',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3269': {
        description: 'msft-gc-ssl, Microsoft Global Catalog over SSL (similar to port 3268, LDAP over SSL)',
        port: '3269',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3283': {
        description: 'Apple Remote Desktop reporting (officially Net Assistant, referring to an earlier product)',
        port: '3283',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3290': {
        description: 'Used by VATSIM, the Virtual Air Traffic Simulation network for voice communication.',
        port: '3290',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '3299': {
        description: 'SAP-Router (routing application proxy for SAP R/3)',
        port: '3299',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3300': {
        description: 'Debate Gopher backend database system[citation needed]',
        port: '3300',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '3305': {
        description: 'odette-ftp, Odette File Transfer Protocol (OFTP)',
        port: '3305',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3306': {
        description: 'MySQL database system',
        port: '3306',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3313': {
        description: 'Verisys file integrity monitoring software',
        port: '3313',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3333': [
        {
            description: 'Network Caller ID server',
            port: '3333',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'CruiseControl.rb[52]',
            port: '3333',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '3386': {
        description: 'GTP\' 3GPP GSM/UMTS CDR logging protocol',
        port: '3386',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3389': {
        description: 'Microsoft Terminal Server (RDP) officially registered as Windows Based Terminal (WBT) - Link',
        port: '3389',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3396': {
        description: 'Novell NDPS Printer Agent',
        port: '3396',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3412': {
        description: 'xmlBlaster',
        port: '3412',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3423': {
        description: 'Xware xTrm Communication Protocol',
        port: '3423',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3424': {
        description: 'Xware xTrm Communication Protocol over SSL',
        port: '3424',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3455': {
        description: '[RSVP] Reservation Protocol',
        port: '3455',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3478': [
        {
            description: 'STUN, a protocol for NAT traversal[53]',
            port: '3478',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'TURN, a protocol for NAT traversal[54]',
            port: '3478',
            status: 'Official',
            tcp: true,
            udp: true
        }
    ],
    '3483': [
        {
            description: 'Slim Devices discovery protocol',
            port: '3483',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'Slim Devices SlimProto protocol',
            port: '3483',
            status: 'Official',
            tcp: true,
            udp: false
        }
    ],
    '3493': {
        description: 'Network UPS Tools (NUT)',
        port: '3493',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3516': {
        description: 'Smartcard Port',
        port: '3516',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3527': {
        description: 'Microsoft Message Queuing',
        port: '3527',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '3535': {
        description: 'SMTP alternate[55]',
        port: '3535',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3537': {
        description: 'ni-visa-remote[citation needed]',
        port: '3537',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '3544': {
        description: 'Teredo tunneling',
        port: '3544',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '3605': {
        description: 'ComCam IO Port',
        port: '3605',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '3606': {
        description: 'Splitlock Server',
        port: '3606',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3632': {
        description: 'distributed compiler',
        port: '3632',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3689': {
        description: 'Digital Audio Access Protocol (DAAP)—used by Apple’s iTunes and AirPort Express',
        port: '3689',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3690': {
        description: 'Subversion (SVN) version control system',
        port: '3690',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3702': {
        description: 'Web Services Dynamic Discovery (WS-Discovery), used by various components of Windows Vista',
        port: '3702',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3724': [
        {
            description: 'Used by some Blizzard games[43]',
            port: '3724',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Club Penguin Disney online game for kids',
            port: '3724',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '3784': {
        description: 'VoIP program used by Ventrilo',
        port: '3784',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '3785': {
        description: 'VoIP program used by Ventrilo',
        port: '3785',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '3799': {
        description: 'RADIUS change of authorization',
        port: '3799',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '3800': {
        description: 'Used by HGG programs[citation needed]',
        port: '3800',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3825': {
        description: 'Used by RedSeal Networks client/server connection[citation needed]',
        port: '3825',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3826': [
        {
            description: 'WarMUX game server',
            port: '3826',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Used by RedSeal Networks client/server connection[citation needed]',
            port: '3826',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '3835': {
        description: 'Used by RedSeal Networks client/server connection[citation needed]',
        port: '3835',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3868': {
        description: 'Diameter base protocol (RFC 3588)',
        port: '3868',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3872': {
        description: 'Oracle Management Remote Agent[citation needed]',
        port: '3872',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3880': {
        description: 'IGRS',
        port: '3880',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3899': {
        description: 'Remote Administrator',
        port: '3899',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '3900': {
        description: 'udt_os, IBM UniData UDT OS[56]',
        port: '3900',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '3945': {
        description: 'EMCADS service, a Giritech product used by G/On',
        port: '3945',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '3978': {
        description: 'OpenTTD game (masterserver and content service)',
        port: '3978',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '3979': {
        description: 'OpenTTD game',
        port: '3979',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '3999': {
        description: 'Norman distributed scanning service',
        port: '3999',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4000': {
        description: 'Diablo II game',
        port: '4000',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '4001': {
        description: 'Microsoft Ants game',
        port: '4001',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4007': {
        description: 'PrintBuzzer printer monitoring socket server[citation needed]',
        port: '4007',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4018': {
        description: 'protocol information and warnings',
        port: '4018',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4035': {
        description: 'IBM Rational Developer for System z Remote System Explorer Daemon',
        port: '4035',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '4045': {
        description: 'Solaris lockd NFS lock daemon/manager',
        port: '4045',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '4069': {
        description: 'Minger Email Address Verification Protocol[57]',
        port: '4069',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '4089': {
        description: 'OpenCORE Remote Control Service',
        port: '4089',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4093': {
        description: 'PxPlus Client server interface ProvideX',
        port: '4093',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4096': {
        description: 'Ascom Timeplex BRE (Bridge Relay Element)',
        port: '4096',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4100': {
        description: 'WatchGuard authentication applet default',
        port: '4100',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '4105': {
        description: 'Shofar (ShofarNexus)',
        port: '4105',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4111': {
        description: 'Xgrid',
        port: '4111',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '4116': {
        description: 'Smartcard-TLS',
        port: '4116',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4125': {
        description: 'Microsoft Remote Web Workplace administration',
        port: '4125',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4172': {
        description: 'Teradici PCoIP',
        port: '4172',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4201': {
        description: 'TinyMUD and various derivatives',
        port: '4201',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4224': {
        description: 'Cisco Audio Session Tunneling[citation needed]',
        port: '4224',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4226': {
        description: 'Aleph One (game)',
        port: '4226',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '4242': [
        {
            description: 'Reverse Battle Tetris',
            port: '4242',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Orthanc - Default DICOM port',
            port: '4242',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '4243': {
        description: 'CrashPlan',
        port: '4243',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4321': {
        description: 'Referral Whois (RWhois) Protocol[58]',
        port: '4321',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '4323': {
        description: 'Lincoln Electric\'s ArcLink/XT[citation needed]',
        port: '4323',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '4433': {
        description: 'Axence nVision [59]',
        port: '4433-4436',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4444': {
        description: 'I2P HTTP/S proxy',
        port: '4444-4445',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4486': {
        description: 'Integrated Client Message Service (ICMS)',
        port: '4486',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4500': {
        description: 'IPSec NAT Traversal (RFC 3947)',
        port: '4500',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '4502': {
        description: 'Microsoft Silverlight connectable ports under non-elevated trust',
        port: '4502-4534',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '4534': {
        description: 'Armagetron Advanced default server port',
        port: '4534',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '4567': {
        description: 'Sinatra default server port in development mode (HTTP)',
        port: '4567',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4569': {
        description: 'Inter-Asterisk eXchange (IAX2)',
        port: '4569',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '4610': {
        description: 'QualiSystems TestShell Suite Services',
        port: '4610–4640',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4662': [
        {
            description: 'OrbitNet Message Service',
            port: '4662',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'OrbitNet Message Service',
            port: '4662',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Default for older versions of eMule[60]',
            port: '4662',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '4664': {
        description: 'Google Desktop Search',
        port: '4664',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4665': {
        description: 'Tardis Beacon Tcp-control of first worm that re-writes time by compiling from code in cleartext.',
        port: '4665',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '4672': {
        description: 'Default for older versions of eMule[60]',
        port: '4672',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '4711': [
        {
            description: 'eMule optional web interface[60]',
            port: '4711',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'McAfee Web Gateway 7 - Default GUI Port HTTP[citation needed]',
            port: '4711',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '4712': {
        description: 'McAfee Web Gateway 7 - Default GUI Port HTTPS[citation needed]',
        port: '4712',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4713': {
        description: 'PulseAudio sound server',
        port: '4713',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4728': {
        description: 'Computer Associates Desktop and Server Management (DMP)/Port Multiplexer [61]',
        port: '4728',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '4730': {
        description: 'Gearman\' job server',
        port: '4730',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4732': {
        description: 'Digital Airways\' OHM server\'s commands to mobile devices (used mainly for binary SMS)',
        port: '4732',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '4747': {
        description: 'Apprentice',
        port: '4747',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4750': {
        description: 'BladeLogic Agent',
        port: '4750',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '4753': {
        description: 'SIMON (service and discovery)',
        port: '4753',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4840': {
        description: 'OPC UA TCP Protocol for OPC Unified Architecture from OPC Foundation',
        port: '4840',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4843': {
        description: 'OPC UA TCP Protocol over TLS/SSL for OPC Unified Architecture from OPC Foundation',
        port: '4843',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4847': {
        description: 'Web Fresh Communication, Quadrion Software & Odorless Entertainment',
        port: '4847',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4894': {
        description: 'LysKOM Protocol A',
        port: '4894',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4899': {
        description: 'Radmin remote administration tool',
        port: '4899',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4949': {
        description: 'Munin Resource Monitoring Tool',
        port: '4949',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '4950': {
        description: 'Cylon Controls UC32 Communications Port',
        port: '4950',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '4982': {
        description: 'Solar Data Log (JK client app for PV solar inverters)[citation needed]',
        port: '4982',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '4993': {
        description: 'Home FTP Server web Interface Default Port[citation needed]',
        port: '4993',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5000': [
        {
            description: 'commplex-main',
            port: '5000',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'UPnP—Windows network device interoperability',
            port: '5000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'VTun—VPN Software',
            port: '5000',
            status: 'Unofficial',
            tcp: true,
            udp: true
        },
        {
            description: 'FlightGear multiplayer[62]',
            port: '5000',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Synology Inc. Management Console, File Station, Audio Station',
            port: '5000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '5001': [
        {
            description: 'commplex-link',
            port: '5001',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Slingbox and Slingplayer',
            port: '5001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Iperf (Tool for measuring TCP and UDP bandwidth performance)',
            port: '5001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Iperf (Tool for measuring TCP and UDP bandwidth performance)',
            port: '5001',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Synology Inc. Secured Management Console, File Station, Audio Station',
            port: '5001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '5002': [
        {
            description: 'SOLICARD ARX[63]',
            port: '5002',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Drobo Dashboard[64]',
            port: '5002',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '5003': {
        description: 'FileMaker',
        port: '5003',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5004': [
        {
            description: 'RTP (Real-time Transport Protocol) media data (RFC 3551, RFC 4571)',
            port: '5004',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'RTP (Real-time Transport Protocol) media data (RFC 3551, RFC 4571)',
            port: '5004',
            status: 'Official',
            tcp: true,
            udp: false
        }
    ],
    '5005': [
        {
            description: 'RTP (Real-time Transport Protocol) control protocol (RFC 3551, RFC 4571)',
            port: '5005',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'RTP (Real-time Transport Protocol) control protocol (RFC 3551, RFC 4571)',
            port: '5005',
            status: 'Official',
            tcp: true,
            udp: false
        }
    ],
    '5010': {
        description: 'Registered to: TelePath (the IBM FlowMark workflow-management system messaging platform)[65]\nThe TCP port is now used for: IBM WebSphere MQ Workflow',
        port: '5010',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5011': {
        description: 'TelePath (the IBM FlowMark workflow-management system messaging platform)[65]',
        port: '5011',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5029': {
        description: 'Sonic Robo Blast 2 : Multiplayer[66]',
        port: '5029',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5031': {
        description: 'AVM CAPI-over-TCP (ISDN over Ethernet tunneling)[citation needed]',
        port: '5031',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5037': {
        description: 'Android ADB server',
        port: '5037',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5050': {
        description: 'Yahoo! Messenger',
        port: '5050',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5051': {
        description: 'ita-agent Symantec Intruder Alert[67]',
        port: '5051',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '5060': {
        description: 'Session Initiation Protocol (SIP)',
        port: '5060',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5061': {
        description: 'Session Initiation Protocol (SIP) over TLS',
        port: '5061',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '5070': {
        description: 'Binary Floor Control Protocol (BFCP),[68] published as RFC 4582, is a protocol that allows for an additional video channel (known as the content channel) alongside the main video channel in a video-conferencing call that uses SIP. Also used for Session Initiation Protocol (SIP) preferred port for PUBLISH on SIP Trunk to Cisco Unified Presence Server (CUPS)',
        port: '5070',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5082': {
        description: 'Qpur Communication Protocol',
        port: '5082',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5083': {
        description: 'Qpur File Protocol',
        port: '5083',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5084': {
        description: 'EPCglobal Low Level Reader Protocol (LLRP)',
        port: '5084',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5085': {
        description: 'EPCglobal Low Level Reader Protocol (LLRP) over TLS',
        port: '5085',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5093': {
        description: 'SafeNet, Inc Sentinel LM, Sentinel RMS, License Manager, Client-to-Server',
        port: '5093',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '5099': {
        description: 'SafeNet, Inc Sentinel LM, Sentinel RMS, License Manager, Server-to-Server',
        port: '5099',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5104': {
        description: 'IBM Tivoli Framework NetCOOL/Impact[69] HTTP Service',
        port: '5104',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5106': {
        description: 'A-Talk Common connection[citation needed]',
        port: '5106',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5107': {
        description: 'A-Talk Remote server connection[citation needed]',
        port: '5107',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5108': {
        description: 'VPOP3 Mail Server Webmail[citation needed]',
        port: '5108',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5109': {
        description: 'VPOP3 Mail Server Status[citation needed]',
        port: '5109',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5110': {
        description: 'ProRat Server',
        port: '5110',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5121': {
        description: 'Neverwinter Nights',
        port: '5121',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5124': {
        description: 'TorgaNET (Micronational Darknet)',
        port: '5124',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5125': {
        description: 'TorgaNET (Micronational Intelligence Darknet)',
        port: '5125',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5150': [
        {
            description: 'ATMP Ascend Tunnel Management Protocol[70]',
            port: '5150',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Malware Cerberus RAT[citation needed]',
            port: '5150',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '5151': [
        {
            description: 'ESRI SDE Instance',
            port: '5151',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'ESRI SDE Remote Start',
            port: '5151',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '5154': {
        description: 'BZFlag',
        port: '5154',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5176': {
        description: 'ConsoleWorks default UI interface[citation needed]',
        port: '5176',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5190': {
        description: 'ICQ and AOL Instant Messenger',
        port: '5190',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '5222': {
        description: 'Extensible Messaging and Presence Protocol (XMPP) client connection[71][72]',
        port: '5222',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '5223': {
        description: 'Extensible Messaging and Presence Protocol (XMPP) client connection over SSL',
        port: '5223',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5228': [
        {
            description: 'HP Virtual Room Service',
            port: '5228',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Google Play, Android Cloud to Device Messaging Service, Google Cloud Messaging',
            port: '5228',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '5246': {
        description: 'Control And Provisioning of Wireless Access Points (CAPWAP) CAPWAP control[73]',
        port: '5246',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '5247': {
        description: 'Control And Provisioning of Wireless Access Points (CAPWAP) CAPWAP data[73]',
        port: '5247',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '5269': {
        description: 'Extensible Messaging and Presence Protocol (XMPP) server connection[71][72]',
        port: '5269',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '5280': {
        description: 'Extensible Messaging and Presence Protocol (XMPP) XEP-0124: Bidirectional-streams Over Synchronous HTTP (BOSH)',
        port: '5280',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '5281': [
        {
            description: 'Undo License Manager',
            port: '5281',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Extensible Messaging and Presence Protocol (XMPP)[74]',
            port: '5281',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '5298': {
        description: 'Extensible Messaging and Presence Protocol (XMPP)[75]',
        port: '5298',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5310': {
        description: 'Outlaws (1997 video game). Both UDP and TCP are reserved, but only UDP is used',
        port: '5310',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5349': [
        {
            description: 'STUN, a protocol for NAT traversal (UDP is reserved)[53]',
            port: '5349',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'TURN, a protocol for NAT traversal (UDP is reserved)[54]',
            port: '5349',
            status: 'Official',
            tcp: true,
            udp: false
        }
    ],
    '5351': {
        description: 'NAT Port Mapping Protocol—client-requested configuration for inbound connections through network address translators',
        port: '5351',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5353': {
        description: 'Multicast DNS (mDNS)',
        port: '5353',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '5355': {
        description: 'LLMNR—Link-Local Multicast Name Resolution, allows hosts to perform name resolution for hosts on the same local link (only provided by Windows Vista and Server 2008)',
        port: '5355',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5357': {
        description: 'Web Services for Devices (WSDAPI) (only provided by Windows Vista, Windows 7 and Server 2008)',
        port: '5357',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5358': {
        description: 'WSDAPI Applications to Use a Secure Channel (only provided by Windows Vista, Windows 7 and Server 2008)',
        port: '5358',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5394': {
        description: 'Kega Fusion, a Sega multi-console emulator[76][77]',
        port: '5394',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '5402': {
        description: 'mftp, Stratacache OmniCast content delivery system MFTP file sharing protocol',
        port: '5402',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5405': {
        description: 'NetSupport Manager',
        port: '5405',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5412': {
        description: 'IBM Rational Synergy (Telelogic Synergy) (Continuus CM) Message Router',
        port: '5412',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5413': {
        description: 'Wonderware SuiteLink service',
        port: '5413',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5421': {
        description: 'NetSupport Manager',
        port: '5421',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5432': {
        description: 'PostgreSQL database system',
        port: '5432',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5433': {
        description: 'Bouwsoft file/webserver[78]',
        port: '5433',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5445': {
        description: 'Cisco Unified Video Advantage[citation needed]',
        port: '5445',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '5450': {
        description: 'OSIsoft PI Server Client Access',
        port: '5450',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5457': {
        description: 'OSIsoft PI Asset Framework Client Access',
        port: '5457',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5458': {
        description: 'OSIsoft PI Notifications Client Access',
        port: '5458',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5495': {
        description: 'IBM Cognos TM1 Admin server',
        port: '5495',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5498': {
        description: 'Hotline tracker server connection',
        port: '5498',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5499': {
        description: 'Hotline tracker server discovery',
        port: '5499',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '5500': {
        description: 'VNC remote desktop protocol—for incoming listening viewer, Hotline control connection',
        port: '5500',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5501': {
        description: 'Hotline file transfer connection',
        port: '5501',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5517': {
        description: 'Setiqueue Proxy server client for SETI@Home project',
        port: '5517',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5550': {
        description: 'Hewlett-Packard Data Protector[citation needed]',
        port: '5550',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5555': {
        description: 'Freeciv versions up to 2.0, Hewlett-Packard Data Protector, McAfee EndPoint Encryption Database Server, SAP, Default for Microsoft Dynamics CRM 4.0',
        port: '5555',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5556': {
        description: 'Freeciv',
        port: '5556',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5591': {
        description: 'Default for Tidal Enterprise Scheduler master-Socket used for communication between Agent-to-Master, though can be changed[citation needed]',
        port: '5591',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5631': {
        description: 'pcANYWHEREdata, Symantec pcAnywhere (version 7.52 and later[79])[80] data',
        port: '5631',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '5632': {
        description: 'pcANYWHEREstat, Symantec pcAnywhere (version 7.52 and later) status',
        port: '5632',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '5656': {
        description: 'IBM Lotus Sametime p2p file transfer',
        port: '5656',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5666': {
        description: 'NRPE (Nagios)',
        port: '5666',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5667': {
        description: 'NSCA (Nagios)',
        port: '5667',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5672': {
        description: 'AMQP',
        port: '5672',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '5678': {
        description: 'Mikrotik RouterOS Neighbor Discovery Protocol (MNDP)',
        port: '5678',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '5721': {
        description: 'Kaseya[citation needed]',
        port: '5721',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5723': {
        description: 'Operations Manager[81]',
        port: '5723',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5741': {
        description: 'IDA Discover Port 1',
        port: '5741',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5742': {
        description: 'IDA Discover Port 2',
        port: '5742',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5800': {
        description: 'VNC remote desktop protocol—for use over HTTP',
        port: '5800',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5814': {
        description: 'Hewlett-Packard Support Automation (HP OpenView Self-Healing Services)[citation needed]',
        port: '5814',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5850': {
        description: 'COMIT SE (PCR)[citation needed]',
        port: '5850',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5852': {
        description: 'Adeona client: communications to OpenDHT[citation needed]',
        port: '5852',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5900': {
        description: 'Virtual Network Computing (VNC) remote desktop protocol (used by Apple Remote Desktop and others)',
        port: '5900',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5912': {
        description: 'Default for Tidal Enterprise Scheduler agent-Socket used for communication between Master-to-Agent, though can be changed[citation needed]',
        port: '5912',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '5938': {
        description: 'TeamViewer remote desktop protocol',
        port: '5938',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '5984': {
        description: 'CouchDB database server',
        port: '5984',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '5999': {
        description: 'CVSup file update tool[82]',
        port: '5999',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '6000': {
        description: 'X11—used between an X client and server over the network',
        port: '6000',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '6001': {
        description: 'X11—used between an X client and server over the network',
        port: '6001',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '6005': [
        {
            description: 'Default for BMC Software Control-M/Server—Socket used for communication between Control-M processes—though often changed during installation',
            port: '6005',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Default for Camfrog chat & cam client',
            port: '6005',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '6009': {
        description: 'JD Edwards EnterpriseOne ERP system JDENet messaging client listener',
        port: '6009',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6050': [
        {
            description: 'Arcserve backup',
            port: '6050',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Nortel software[citation needed]',
            port: '6050',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '6051': {
        description: 'Arcserve backup',
        port: '6051',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6072': {
        description: 'iOperator Protocol Signal Port[citation needed]',
        port: '6072',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6086': {
        description: 'PDTP—FTP like file server in a P2P network',
        port: '6086',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '6100': [
        {
            description: 'Vizrt System',
            port: '6100',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Ventrilo This is the authentication port that must be allowed outbound for version 3 of Ventrilo',
            port: '6100',
            status: 'Official',
            tcp: true,
            udp: false
        }
    ],
    '6101': {
        description: 'Backup Exec Agent Browser[citation needed]',
        port: '6101',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6110': {
        description: 'softcm, HP Softbench CM',
        port: '6110',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6111': {
        description: 'spc, HP Softbench Sub-Process Control',
        port: '6111',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6112': [
        {
            description: '"dtspcd"—a network daemon that accepts requests from clients to execute commands and launch applications remotely',
            port: '6112',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: '"dtspcd"—a network daemon that accepts requests from clients to execute commands and launch applications remotely',
            port: '6112',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Blizzard\'s Battle.net gaming service and some games,[43] ArenaNet gaming service, Relic gaming service',
            port: '6112',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Club Penguin Disney online game for kids',
            port: '6112',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '6113': {
        description: 'Club Penguin Disney online game for kids, Used by some Blizzard games[43]',
        port: '6113',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6129': {
        description: 'DameWare Remote Control',
        port: '6129',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '6257': {
        description: 'WinMX (see also 6699)',
        port: '6257',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '6260': {
        description: 'planet M.U.L.E.',
        port: '6260',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '6262': {
        description: 'Sybase Advantage Database Server',
        port: '6262',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6324': {
        description: 'Hall Research Device discovery and configuration',
        port: '6324',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6343': {
        description: 'SFlow, sFlow traffic monitoring',
        port: '6343',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '6346': {
        description: 'gnutella-svc, gnutella (FrostWire, Limewire, Shareaza, etc.)',
        port: '6346',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6347': {
        description: 'gnutella-rtr, Gnutella alternate',
        port: '6347',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6350': {
        description: 'App Discovery and Access Protocol',
        port: '6350',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6389': {
        description: 'EMC CLARiiON',
        port: '6389',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6432': {
        description: 'PgBouncer - A connection pooler for PostgreSQL',
        port: '6432',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '6444': {
        description: 'Sun Grid Engine—Qmaster Service',
        port: '6444',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6445': {
        description: 'Sun Grid Engine—Execution Service',
        port: '6445',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6502': {
        description: 'Netop Business Solutions - NetOp Remote Control',
        port: '6502',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '6503': {
        description: 'Netop Business Solutions - NetOp School[citation needed]',
        port: '6503',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '6514': {
        description: 'Syslog over TLS[83]',
        port: '6514',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '6515': {
        description: 'Elipse RPC Protocol (REC)',
        port: '6515',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6522': {
        description: 'Gobby (and other libobby-based software)',
        port: '6522',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6523': {
        description: 'Gobby 0.5 (and other libinfinity-based software)',
        port: '6523',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6543': {
        description: 'Paradigm Research & Development Jetnet[84] default',
        port: '6543',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '6560': {
        description: 'Speech-Dispatcher daemon',
        port: '6560-6561',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6566': {
        description: 'SANE (Scanner Access Now Easy)—SANE network scanner daemon',
        port: '6566',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6571': {
        description: 'Windows Live FolderShare client',
        port: '6571',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '6600': {
        description: 'Music Player Daemon (MPD)',
        port: '6600',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6619': {
        description: 'odette-ftps, Odette File Transfer Protocol (OFTP) over TLS/SSL',
        port: '6619',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '6646': {
        description: 'McAfee Network Agent[citation needed]',
        port: '6646',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '6660': {
        description: 'Internet Relay Chat (IRC)',
        port: '6660–6664',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6665': {
        description: 'Internet Relay Chat (IRC)',
        port: '6665–6669',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '6679': [
        {
            description: 'Osorno Automation Protocol (OSAUT)',
            port: '6679',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'IRC SSL (Secure Internet Relay Chat)—often used',
            port: '6679',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '6697': {
        description: 'IRC SSL (Secure Internet Relay Chat)—often used',
        port: '6697',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6699': {
        description: 'WinMX (see also 6257)',
        port: '6699',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6702': {
        description: 'Default for Tidal Enterprise Scheduler client-Socket used for communication between Client-to-Master, though can be changed[citation needed]',
        port: '6702',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6715': {
        description: 'AberMUD and derivatives default port',
        port: '6715',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '6771': {
        description: 'Polycom server broadcast[citation needed]',
        port: '6771',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '6789': [
        {
            description: 'Campbell Scientific Loggernet Software[85]',
            port: '6789',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Bucky\'s Instant Messaging Program',
            port: '6789',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '6881': {
        description: 'BitTorrent part of full range of ports used most often',
        port: '6881–6887',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '6888': [
        {
            description: 'MUSE',
            port: '6888',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'BitTorrent part of full range of ports used most often',
            port: '6888',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '6889': {
        description: 'BitTorrent part of full range of ports used most often',
        port: '6889–6890',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '6891': [
        {
            description: 'BitTorrent part of full range of ports used most often',
            port: '6891–6900',
            status: 'Unofficial',
            tcp: true,
            udp: true
        },
        {
            description: 'Windows Live Messenger (File transfer)',
            port: '6891–6900',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '6901': [
        {
            description: 'Windows Live Messenger (Voice)',
            port: '6901',
            status: 'Unofficial',
            tcp: true,
            udp: true
        },
        {
            description: 'BitTorrent part of full range of ports used most often',
            port: '6901',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '6902': {
        description: 'BitTorrent part of full range of ports used most often',
        port: '6902–6968',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '6969': [
        {
            description: 'acmsoda',
            port: '6969',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'BitTorrent tracker',
            port: '6969',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '6970': {
        description: 'BitTorrent part of full range of ports used most often',
        port: '6970–6999',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '7000': [
        {
            description: 'Default for Vuze\'s built in HTTPS Bittorrent Tracker',
            port: '7000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Avira Server Management Console',
            port: '7000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '7001': [
        {
            description: 'Avira Server Management Console',
            port: '7001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Default for BEA WebLogic Server\'s HTTP server, though often changed during installation',
            port: '7001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '7002': {
        description: 'Default for BEA WebLogic Server\'s HTTPS server, though often changed during installation',
        port: '7002',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7005': {
        description: 'Default for BMC Software Control-M/Server and Control-M/Agent for Agent-to-Server, though often changed during installation',
        port: '7005',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7006': {
        description: 'Default for BMC Software Control-M/Server and Control-M/Agent for Server-to-Agent, though often changed during installation',
        port: '7006',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7010': {
        description: 'Default for Cisco AON AMC (AON Management Console) [86]',
        port: '7010',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7022': {
        description: 'Database mirroring endpoints[citation needed]',
        port: '7022',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7023': {
        description: 'Bryan Wilcutt T2-NMCS Protocol for SatCom Modems',
        port: '7023',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '7025': {
        description: 'Zimbra LMTP [mailbox]—local mail delivery',
        port: '7025',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7047': {
        description: 'Zimbra conversion server',
        port: '7047',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7080': {
        description: 'Sepialine Argos Communications port',
        port: '7080',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '7133': {
        description: 'Enemy Territory: Quake Wars',
        port: '7133',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7144': {
        description: 'Peercast[citation needed]',
        port: '7144',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7145': {
        description: 'Peercast[citation needed]',
        port: '7145',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7171': {
        description: 'Tibia',
        port: '7171',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7306': {
        description: 'Zimbra mysql [mailbox][citation needed]',
        port: '7306',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7307': {
        description: 'Zimbra mysql [logger][citation needed]',
        port: '7307',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7312': {
        description: 'Sibelius License Server',
        port: '7312',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '7396': {
        description: 'Web control interface for Folding@home v7.3.6 and later[87]',
        port: '7396',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7400': {
        description: 'RTPS (Real Time Publish Subscribe) DDS Discovery',
        port: '7400',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '7401': {
        description: 'RTPS (Real Time Publish Subscribe) DDS User-Traffic',
        port: '7401',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '7402': {
        description: 'RTPS (Real Time Publish Subscribe) DDS Meta-Traffic',
        port: '7402',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '7473': {
        description: 'Rise: The Vieneo Province',
        port: '7473',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '7547': {
        description: 'CPE WAN Management Protocol Technical Report 069',
        port: '7547',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '7615': {
        description: 'ISL Online[88] communication protocol',
        port: '7615',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7624': {
        description: 'Instrument Neutral Distributed Interface',
        port: '7624',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '7634': {
        description: 'hddtemp - Utility to monitor hard drive temperature',
        port: '7634',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7652': {
        description: 'I2P anonymizing overlay network',
        port: '7652-7654',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7655': {
        description: 'I2P SAM Bridge Socket API',
        port: '7655',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '7656': {
        description: 'I2P anonymizing overlay network',
        port: '7656-7660',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7670': {
        description: 'BrettspielWelt BSW Boardgame Portal',
        port: '7670',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7676': {
        description: 'Aqumin AlphaVision Remote Command Interface[citation needed]',
        port: '7676',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7700': {
        description: 'P2P DC (RedHub)[citation needed]',
        port: '7700',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '7707': {
        description: 'Killing Floor',
        port: '7707',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '7708': {
        description: 'Killing Floor',
        port: '7708',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '7717': {
        description: 'Killing Floor',
        port: '7717',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '7777': [
        {
            description: 'iChat server file transfer proxy',
            port: '7777',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Oracle Cluster File System 2[citation needed]',
            port: '7777',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Windows backdoor program tini.exe default[citation needed]',
            port: '7777',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Xivio default Chat Server[citation needed]',
            port: '7777',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Terraria default server',
            port: '7777',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'San Andreas Multiplayer default server',
            port: '7777',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Unreal Tournament series default server[citation needed]',
            port: '7777-7788',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Unreal Tournament series default server[citation needed]',
            port: '7777-7788',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '7778': {
        description: 'Bad Trip MUD[citation needed]',
        port: '7778',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7787': {
        description: 'GFI EventsManager 7 & 8[citation needed]',
        port: '7787-7788',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '7831': {
        description: 'Default used by Smartlaunch Internet Cafe Administration[89] software',
        port: '7831',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7880': {
        description: 'PowerSchool Gradebook Server[citation needed]',
        port: '7880',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '7890': {
        description: 'Default that will be used by the iControl Internet Cafe Suite Administration software',
        port: '7890',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7915': {
        description: 'Default for YSFlight server[90]',
        port: '7915',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7935': {
        description: 'Fixed port used for Adobe Flash Debug Player to communicate with a debugger (Flash IDE, Flex Builder or fdb).[91]',
        port: '7935',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '7937': {
        description: 'EMC2 (Legato) Networker or Sun Solstice Backup',
        port: '7937-9936',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '8000': [
        {
            description: 'iRDMI (Intel Remote Desktop Management Interface)[92]—sometimes erroneously used instead of port 8080',
            port: '8000',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'iRDMI (Intel Remote Desktop Management Interface)[92]—sometimes erroneously used instead of port 8080',
            port: '8000',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Commonly used for internet radio streams such as those using SHOUTcast',
            port: '8000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'FreemakeVideoCapture service a part of Freemake Video Downloader [93]',
            port: '8000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Nortel Contivity Router Firewall User Authentication (FWUA) default port number',
            port: '8000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8001': {
        description: 'Commonly used for internet radio streams such as those using SHOUTcast',
        port: '8001',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8002': {
        description: 'Cisco Systems Unified Call Manager Intercluster[citation needed]',
        port: '8002',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8008': [
        {
            description: 'HTTP Alternate',
            port: '8008',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'IBM HTTP Server administration default',
            port: '8008',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8009': {
        description: 'ajp13—Apache JServ Protocol AJP Connector',
        port: '8009',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8010': {
        description: 'XMPP File transfers',
        port: '8010',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8011': {
        description: 'HTTP/TCP Symon Communications Event and Query Engine[citation needed]',
        port: '8011-8013',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8014': [
        {
            description: 'HTTP/TCP Symon Communications Event and Query Engine[citation needed]',
            port: '8014',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Perseus SDR Receiver default remote connection port[citation needed]',
            port: '8014',
            status: 'Unofficial',
            tcp: true,
            udp: true
        }
    ],
    '8020': {
        description: '360Works SuperContainer[94]',
        port: '8020',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8042': {
        description: 'Orthanc - Default HTTP Port for GUI',
        port: '8042',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8069': {
        description: 'OpenERP Default HTTP port (web interface and xmlrpc calls)',
        port: '8069',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8070': {
        description: 'OpenERP Legacy netrpc protocol',
        port: '8070',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8074': {
        description: 'Gadu-Gadu',
        port: '8074',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8075': {
        description: 'Killing Floor',
        port: '8075',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8078': {
        description: 'Default port for most Endless Online-based servers[citation needed]',
        port: '8078',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '8080': [
        {
            description: 'HTTP alternate (http_alt)—commonly used for Web proxy and caching server, or for running a Web server as a non-root user',
            port: '8080',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Apache Tomcat',
            port: '8080',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'FilePhile Master/Relay',
            port: '8080',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Vermont Systems / RecTrac Vermont Systems RecTrac (WebTrac) network installer',
            port: '8080',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8081': {
        description: 'HTTP alternate, VibeStreamer, e.g. McAfee ePolicy Orchestrator (ePO)',
        port: '8081',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8086': [
        {
            description: 'HELM Web Host Automation Windows Control Panel',
            port: '8086',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Kaspersky AV Control Center',
            port: '8086',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8087': [
        {
            description: 'Hosting Accelerator Control Panel',
            port: '8087',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Parallels Plesk Control Panel',
            port: '8087',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Kaspersky AV Control Center',
            port: '8087',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '8088': {
        description: 'Asterisk (PBX) Web Configuration utility (GUI Addon)',
        port: '8088',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8089': {
        description: 'Splunk Daemon',
        port: '8089',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8090': {
        description: 'HTTP Alternate (http_alt_alt)—used as an alternative to port 8080[citation needed]',
        port: '8090',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8100': {
        description: 'Console Gateway License Verification',
        port: '8100',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8111': {
        description: 'JOSM Remote Control',
        port: '8111',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8116': {
        description: 'Check Point Cluster Control Protocol',
        port: '8116',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '8118': {
        description: 'Privoxy—advertisement-filtering Web proxy',
        port: '8118',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '8123': [
        {
            description: 'Polipo Web proxy',
            port: '8123',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Bukkit DynMap Default Webserver Bind Address',
            port: '8123',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8192': {
        description: 'Sophos Remote Management System',
        port: '8192',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8193': {
        description: 'Sophos Remote Management System',
        port: '8193',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8194': [
        {
            description: 'Sophos Remote Management System',
            port: '8194',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Bloomberg Application[citation needed]',
            port: '8194',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8195': {
        description: 'Bloomberg Application[citation needed]',
        port: '8195',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8200': {
        description: 'GoToMyPC',
        port: '8200',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8222': {
        description: 'VMware Server Management User Interface[95] (insecure Web interface).[96] See also port 8333',
        port: '8222',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8243': {
        description: 'HTTPS listener for Apache Synapse [97]',
        port: '8243',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '8280': {
        description: 'HTTP listener for Apache Synapse [97]',
        port: '8280',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '8291': {
        description: 'Winbox—Default on a MikroTik RouterOS for a Windows application used to administer MikroTik RouterOS[citation needed]',
        port: '8291',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8303': {
        description: 'Teeworlds Server',
        port: '8303',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '8331': {
        description: 'MultiBit, [8]',
        port: '8331',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8332': {
        description: 'Bitcoin JSON-RPC server[98]',
        port: '8332',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8333': [
        {
            description: 'Bitcoin[99]',
            port: '8333',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'VMware Server Management User Interface[95] (secure Web interface).[96] See also port 8222',
            port: '8333',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8400': {
        description: 'cvp, Commvault Unified Data Management',
        port: '8400',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '8442': {
        description: 'CyBro A-bus, Cybrotech Ltd.',
        port: '8442',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '8443': {
        description: 'SW Soft Plesk Control Panel, Apache Tomcat SSL, Promise WebPAM SSL, McAfee ePolicy Orchestrator (ePO)',
        port: '8443',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8484': {
        description: 'MapleStory Login Server',
        port: '8484',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8500': {
        description: 'ColdFusion Macromedia/Adobe ColdFusion default and Duke Nukem 3D—default',
        port: '8500',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '8501': {
        description: '[9] DukesterX —default[citation needed]',
        port: '8501',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8585': {
        description: 'MapleStory Game Server',
        port: '8585',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8586': {
        description: 'MapleStory Game Server',
        port: '8586',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8587': {
        description: 'MapleStory Game Server',
        port: '8587',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8588': {
        description: 'MapleStory Game Server',
        port: '8588',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8589': {
        description: 'MapleStory Game Server',
        port: '8589',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8601': {
        description: 'Wavestore CCTV protocol[100]',
        port: '8601',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8602': {
        description: 'Wavestore Notification protocol[100]',
        port: '8602',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '8642': {
        description: 'Lotus Traveller[citation needed]',
        port: '8642',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8691': {
        description: 'Ultra Fractal default server port for distributing calculations over network computers',
        port: '8691',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8701': {
        description: 'SoftPerfect Bandwidth Manager',
        port: '8701',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '8702': {
        description: 'SoftPerfect Bandwidth Manager',
        port: '8702',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '8767': {
        description: 'TeamSpeak—default',
        port: '8767',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '8768': {
        description: 'TeamSpeak—alternate',
        port: '8768',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '8778': {
        description: 'EPOS Speech Synthesis System',
        port: '8778',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8834': {
        description: 'Nessus web',
        port: '8834',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '8840': {
        description: 'Opera Unite server',
        port: '8840',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8880': [
        {
            description: 'cddbp-alt, CD DataBase (CDDB) protocol (CDDBP) alternate',
            port: '8880',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'cddbp-alt, CD DataBase (CDDB) protocol (CDDBP) alternate',
            port: '8880',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'WebSphere Application Server SOAP connector default',
            port: '8880',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Win Media Streamer to Server SOAP connector default',
            port: '8880',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8881': [
        {
            description: 'Atlasz Informatics Research Ltd Secure Application Server[citation needed]',
            port: '8881',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Netflexity Inc QFlex - IBM WebSphere MQ monitoring software.',
            port: '8881',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8882': {
        description: 'Atlasz Informatics Research Ltd Secure Application Server[citation needed]',
        port: '8882',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8883': {
        description: 'Secure MQ Telemetry Transport (MQTT over SSL)',
        port: '8883',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '8886': {
        description: 'PPM3 (Padtec Management Protocol version 3)',
        port: '8886',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8887': {
        description: 'HyperVM HTTP',
        port: '8887',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '8888': [
        {
            description: 'HyperVM HTTPS',
            port: '8888',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Freenet HTTP',
            port: '8888',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'NewsEDGE server',
            port: '8888',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Sun Answerbook dwhttpd server (deprecated by docs.sun.com)',
            port: '8888',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'GNUmp3d HTTP music streaming and Web interface',
            port: '8888',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'LoLo Catcher HTTP Web interface (www.optiform.com)',
            port: '8888',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'D2GS Admin Console Telnet administration console for D2GS servers (Diablo 2)',
            port: '8888',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Earthland Relams 2 Server (AU1_2)[citation needed]',
            port: '8888',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'MAMP Server',
            port: '8888',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8889': [
        {
            description: 'MAMP Server',
            port: '8889',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Earthland Relams 2 Server (AU1_1)[citation needed]',
            port: '8889',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '8937': {
        description: 'Transaction Warehouse Data Service (TWDS)',
        port: '8937',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '8983': {
        description: 'Default for Apache Solr [101]',
        port: '8983',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '8998': {
        description: 'I2P Monotone Repository',
        port: '8998',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9000': [
        {
            description: 'Buffalo LinkSystem Web access[citation needed]',
            port: '9000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'DBGp',
            port: '9000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'SqueezeCenter web server & streaming',
            port: '9000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'UDPCast',
            port: '9000',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'Play! Framework web server[citation needed]',
            port: '9000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '9001': [
        {
            description: 'ETL Service Manager[102]',
            port: '9001',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'Microsoft SharePoint authoring environment',
            port: '9001',
            status: 'Unofficial',
            tcp: false,
            udp: false
        },
        {
            description: 'cisco-xremote router configuration[citation needed]',
            port: '9001',
            status: 'Unofficial',
            tcp: false,
            udp: false
        },
        {
            description: 'Tor network default',
            port: '9001',
            status: 'Unofficial',
            tcp: false,
            udp: false
        },
        {
            description: 'DBGp Proxy',
            port: '9001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'HSQLDB default port',
            port: '9001',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '9002': {
        description: 'Newforma Server comms',
        port: '9002',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '9009': {
        description: 'Pichat Server—Peer to peer chat software',
        port: '9009',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9010': {
        description: 'TISERVICEMANAGEMENT Numara Track-It!',
        port: '9010',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9020': {
        description: 'WiT WiT Services',
        port: '9020',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '9025': {
        description: 'WiT WiT Services',
        port: '9025',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '9030': {
        description: 'Tor often used',
        port: '9030',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9043': {
        description: 'WebSphere Application Server Administration Console secure',
        port: '9043',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9050': {
        description: 'Tor',
        port: '9050',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9051': {
        description: 'Tor',
        port: '9051',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9060': {
        description: 'WebSphere Application Server Administration Console',
        port: '9060',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9080': [
        {
            description: 'glrpc, Groove Collaboration software GLRPC',
            port: '9080',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'glrpc, Groove Collaboration software GLRPC',
            port: '9080',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'WebSphere Application Server HTTP Transport (port 1) default',
            port: '9080',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '9090': [
        {
            description: 'WebSM',
            port: '9090',
            status: 'Unofficial',
            tcp: true,
            udp: true
        },
        {
            description: 'Webwasher, Secure Web, McAfee Web Gateway - Default Proxy Port[citation needed]',
            port: '9090',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Openfire Administration Console',
            port: '9090',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'SqueezeCenter control (CLI)',
            port: '9090',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '9091': [
        {
            description: 'Openfire Administration Console (SSL Secured)',
            port: '9091',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Transmission (BitTorrent client) Web Interface',
            port: '9091',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '9100': {
        description: 'PDL Data Stream',
        port: '9100',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '9101': {
        description: 'Bacula Director',
        port: '9101',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9102': {
        description: 'Bacula File Daemon',
        port: '9102',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9103': {
        description: 'Bacula Storage Daemon',
        port: '9103',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9105': {
        description: 'Xadmin Control Daemon',
        port: '9105',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9106': {
        description: 'Astergate Control Daemon',
        port: '9106',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9107': {
        description: 'Astergate-FAX Control Daemon',
        port: '9107',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '9110': {
        description: 'SSMP Message protocol',
        port: '9110',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '9119': {
        description: 'MXit Instant Messenger',
        port: '9119',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9191': {
        description: 'Catamount Software - PocketMoney Sync[citation needed]',
        port: '9191',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9199': {
        description: 'Avtex LLC - qStats',
        port: '9199',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9293': {
        description: 'Sony PlayStation RemotePlay[103]',
        port: '9293',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9300': {
        description: 'IBM Cognos 8 SOAP Business Intelligence and Performance Management',
        port: '9300',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9303': {
        description: 'D-Link Shareport Share storage and MFP printers',
        port: '9303',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '9306': {
        description: 'Sphinx Native API',
        port: '9306',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '9309': {
        description: 'Sony PlayStation Vita Host Collaboration WiFi Data Transfer[104]',
        port: '9309',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '9312': {
        description: 'Sphinx SphinxQL',
        port: '9312',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '9418': {
        description: 'git, Git pack transfer service',
        port: '9418',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9420': {
        description: 'MooseFS distributed file system—master server to chunk servers',
        port: '9420',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9421': {
        description: 'MooseFS distributed file system—master server to clients',
        port: '9421',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9422': {
        description: 'MooseFS distributed file system—chunk servers to clients',
        port: '9422',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9535': {
        description: 'mngsuite, LANDesk Management Suite Remote Control',
        port: '9535',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9536': {
        description: 'laes-bf, IP Fabrics Surveillance buffering function',
        port: '9536',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9600': {
        description: 'Omron FINS, OMRON FINS PLC communication',
        port: '9600',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '9675': {
        description: 'Spiceworks Desktop, IT Helpdesk Software',
        port: '9675',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '9676': {
        description: 'Spiceworks Desktop, IT Helpdesk Software',
        port: '9676',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '9695': {
        description: 'CCNx',
        port: '9695',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '9800': [
        {
            description: 'WebDAV Source',
            port: '9800',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'WebCT e-learning portal',
            port: '9800',
            status: 'Unofficial',
            tcp: false,
            udp: false
        }
    ],
    '9875': {
        description: 'Club Penguin Disney online game for kids',
        port: '9875',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '9898': [
        {
            description: 'MonkeyCom[citation needed]',
            port: '9898',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'MonkeyCom[citation needed]',
            port: '9898',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'Tripwire—File Integrity Monitoring Software[citation needed]',
            port: '9898',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '9987': {
        description: 'TeamSpeak 3 server default (voice) port (for the conflicting service see the IANA list)',
        port: '9987',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '9996': [
        {
            description: 'Ryan\'s App "Ryan\'s App" Trading Software',
            port: '9996',
            status: 'Official',
            tcp: true,
            udp: true
        },
        {
            description: 'The Palace "The Palace" Virtual Reality Chat software.—5',
            port: '9996',
            status: 'Official',
            tcp: true,
            udp: true
        }
    ],
    '9998': {
        description: 'The Palace "The Palace" Virtual Reality Chat software.—5',
        port: '9998',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '9999': [
        {
            description: 'Hydranode—edonkey2000 TELNET control',
            port: '9999',
            status: 'Unofficial',
            tcp: false,
            udp: false
        },
        {
            description: 'Lantronix UDS-10/UDS100[105] RS-485 to Ethernet Converter TELNET control',
            port: '9999',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Urchin Web Analytics[citation needed]',
            port: '9999',
            status: 'Unofficial',
            tcp: false,
            udp: false
        }
    ],
    '10000': [
        {
            description: 'Webmin—Web-based administration tool for Unix-like systems',
            port: '10000',
            status: 'Unofficial',
            tcp: false,
            udp: false
        },
        {
            description: 'BackupExec',
            port: '10000',
            status: 'Unofficial',
            tcp: false,
            udp: false
        },
        {
            description: 'Ericsson Account Manager (avim)[citation needed]',
            port: '10000',
            status: 'Unofficial',
            tcp: false,
            udp: false
        }
    ],
    '10001': {
        description: 'Lantronix UDS-10/UDS100[106] RS-485 to Ethernet Converter default',
        port: '10001',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '10008': {
        description: 'Octopus Multiplexer, primary port for the CROMP protocol, which provides a platform-independent means for communication of objects across a network',
        port: '10008',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '10009': {
        description: 'Cross Fire, a multiplayer online First Person Shooter[citation needed]',
        port: '10009',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '10010': {
        description: 'Open Object Rexx (ooRexx) rxapi daemon',
        port: '10010',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '10017': {
        description: 'AIX,NeXT, HPUX—rexd daemon control[citation needed]',
        port: '10017',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '10024': {
        description: 'Zimbra smtp [mta]—to amavis from postfix[citation needed]',
        port: '10024',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '10025': {
        description: 'Zimbra smtp [mta]—back to postfix from amavis[citation needed]',
        port: '10025',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '10050': {
        description: 'Zabbix-Agent',
        port: '10050',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '10051': {
        description: 'Zabbix-Trapper',
        port: '10051',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '10110': {
        description: 'NMEA 0183 Navigational Data. Transport of NMEA 0183 sentences over TCP or UDP',
        port: '10110',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '10113': {
        description: 'NetIQ Endpoint',
        port: '10113',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '10114': {
        description: 'NetIQ Qcheck',
        port: '10114',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '10115': {
        description: 'NetIQ Endpoint',
        port: '10115',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '10116': {
        description: 'NetIQ VoIP Assessor',
        port: '10116',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '10172': {
        description: 'Intuit Quickbooks client',
        port: '10172',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '10200': [
        {
            description: 'FRISK Software International\'s fpscand virus scanning daemon for Unix platforms [107]',
            port: '10200',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'FRISK Software International\'s f-protd virus scanning daemon for Unix platforms [108]',
            port: '10200',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '10201': {
        description: 'FRISK Software International\'s f-protd virus scanning daemon for Unix platforms [108]',
        port: '10201–10204',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '10301': {
        description: 'VoiceIP-ACS UMP default device provisioning endpoint[citation needed]',
        port: '10301',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '10302': {
        description: 'VoiceIP-ACS UMP default device provisioning endpoint (SSL)[citation needed]',
        port: '10302',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '10308': {
        description: 'Lock-on: Modern Air Combat[citation needed]',
        port: '10308',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '10480': {
        description: 'SWAT 4 Dedicated Server[citation needed]',
        port: '10480',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '10823': {
        description: 'Farming Simulator 2011 Default Server[citation needed]',
        port: '10823',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '10891': {
        description: 'Jungle Disk (this port is opened by the Jungle Disk Monitor service on the localhost)[citation needed]',
        port: '10891',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '11001': {
        description: 'metasys ( Johnson Controls Metasys java AC control environment )[citation needed]',
        port: '11001',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '11112': {
        description: 'ACR/NEMA Digital Imaging and Communications in Medicine (DICOM)',
        port: '11112',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '11155': {
        description: 'Tunngle',
        port: '11155',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '11211': {
        description: 'memcached',
        port: '11211',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '11235': {
        description: 'Savage:Battle for Newerth Server Hosting[citation needed]',
        port: '11235',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '11294': {
        description: 'Blood Quest Online Server[citation needed]',
        port: '11294',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '11371': {
        description: 'OpenPGP HTTP key server',
        port: '11371',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '11576': {
        description: 'IPStor Server management communication',
        port: '11576',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '12010': {
        description: 'ElevateDB default database port [109]',
        port: '12010',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '12011': {
        description: 'Axence nVision [59]',
        port: '12011',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '12012': [
        {
            description: 'Axence nVision [59]',
            port: '12012',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Audition Online Dance Battle, Korea Server—Status/Version Check',
            port: '12012',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Audition Online Dance Battle, Korea Server—Status/Version Check',
            port: '12012',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '12013': {
        description: 'Audition Online Dance Battle, Korea Server',
        port: '12013',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '12035': {
        description: 'Linden Lab viewer to sim on SecondLife[citation needed]',
        port: '12035',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '12201': {
        description: 'GELF Protocol',
        port: '12201',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '12222': {
        description: 'Light Weight Access Point Protocol (LWAPP) LWAPP data (RFC 5412)',
        port: '12222',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '12223': {
        description: 'Light Weight Access Point Protocol (LWAPP) LWAPP control (RFC 5412)',
        port: '12223',
        status: 'Official',
        tcp: false,
        udp: true
    },
    '12345': {
        description: 'NetBus—remote administration tool (often Trojan horse). Also used by NetBuster. Little Fighter 2 (TCP).',
        port: '12345',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '12489': {
        description: 'NSClient/NSClient++/NC_Net (Nagios)',
        port: '12489',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '12975': {
        description: 'LogMeIn Hamachi (VPN tunnel software; also port 32976)—used to connect to Mediation Server (bibi.hamachi.cc); will attempt to use SSL (TCP port 443) if both 12975 & 32976 fail to connect',
        port: '12975',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '12998': {
        description: 'Takenaka RDI Mirror World on SecondLife[citation needed]',
        port: '12998–12999',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '13000': {
        description: 'Linden Lab viewer to sim on SecondLife[citation needed]',
        port: '13000–13050',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '13008': {
        description: 'Cross Fire, a multiplayer online First Person Shooter[citation needed]',
        port: '13008',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '13075': {
        description: 'Default[110] for BMC Software Control-M/Enterprise Manager Corba communication, though often changed during installation',
        port: '13075',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '13195': {
        description: 'Ontolux Ontolux 2D',
        port: '13195-13196',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '13337': {
        description: 'ÆtherNet peer-to-peer networking[citation needed]',
        port: '13337-13340',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '13720': {
        description: 'Symantec NetBackup—bprd (formerly VERITAS)',
        port: '13720',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '13721': {
        description: 'Symantec NetBackup—bpdbm (formerly VERITAS)',
        port: '13721',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '13724': {
        description: 'Symantec Network Utility—vnetd (formerly VERITAS)',
        port: '13724',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '13782': {
        description: 'Symantec NetBackup—bpcd (formerly VERITAS)',
        port: '13782',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '13783': {
        description: 'Symantec VOPIED protocol (formerly VERITAS)',
        port: '13783',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '13785': {
        description: 'Symantec NetBackup Database—nbdb (formerly VERITAS)',
        port: '13785',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '13786': {
        description: 'Symantec nomdb (formerly VERITAS)',
        port: '13786',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '14439': {
        description: 'APRS UI-View Amateur Radio[111] UI-WebServer',
        port: '14439',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '14567': {
        description: 'Battlefield 1942 and mods',
        port: '14567',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '14900': {
        description: 'K3 SYSPRO K3 Framework WCF Backbone[citation needed]',
        port: '14900',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '15000': [
        {
            description: 'psyBNC',
            port: '15000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Wesnoth',
            port: '15000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Kaspersky Network Agent[citation needed]',
            port: '15000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'hydap, Hypack Hydrographic Software Packages Data Acquisition',
            port: '15000',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'hydap, Hypack Hydrographic Software Packages Data Acquisition',
            port: '15000',
            status: 'Official',
            tcp: false,
            udp: true
        }
    ],
    '15345': {
        description: 'XPilot Contact',
        port: '15345',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '15556': {
        description: 'Jeex.EU Artesia (direct client-to-db.service)',
        port: '15556',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '15567': {
        description: 'Battlefield Vietnam and mods',
        port: '15567',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '16000': {
        description: 'shroudBNC',
        port: '16000',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '16080': {
        description: 'Mac OS X Server Web (HTTP) service with performance cache[112]',
        port: '16080',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '16200': {
        description: 'Oracle Universal Content Management Content Server',
        port: '16200',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '16250': {
        description: 'Oracle Universal Content Management Inbound Refinery',
        port: '16250',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '16384': {
        description: 'Iron Mountain Digital online backup[citation needed]',
        port: '16384',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '16567': {
        description: 'Battlefield 2 and mods',
        port: '16567',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '17500': {
        description: 'Dropbox LanSync Protocol (db-lsp); used to synchronize file catalogs between Dropbox clients on your local network.',
        port: '17500',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '18010': {
        description: 'Super Dancer Online Extreme(SDO-X)—CiB Net Station Malaysia Server[citation needed]',
        port: '18010',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '18104': {
        description: 'RAD PDF Service',
        port: '18104',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '18180': {
        description: 'DART Reporting server[citation needed]',
        port: '18180',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '18200': {
        description: 'Audition Online Dance Battle, AsiaSoft Thailand Server—Status/Version Check',
        port: '18200',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18201': {
        description: 'Audition Online Dance Battle, AsiaSoft Thailand Server',
        port: '18201',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18206': {
        description: 'Audition Online Dance Battle, AsiaSoft Thailand Server—FAM Database',
        port: '18206',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18300': {
        description: 'Audition Online Dance Battle, AsiaSoft SEA Server—Status/Version Check',
        port: '18300',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18301': {
        description: 'Audition Online Dance Battle, AsiaSoft SEA Server',
        port: '18301',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18306': {
        description: 'Audition Online Dance Battle, AsiaSoft SEA Server—FAM Database',
        port: '18306',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18333': {
        description: 'Bitcoin testnet[99]',
        port: '18333',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '18400': {
        description: 'Audition Online Dance Battle, KAIZEN Brazil Server—Status/Version Check',
        port: '18400',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18401': {
        description: 'Audition Online Dance Battle, KAIZEN Brazil Server',
        port: '18401',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18505': {
        description: 'Audition Online Dance Battle R4p3 Server, Nexon Server—Status/Version Check',
        port: '18505',
        status: 'Unofficial R4p3 Server',
        tcp: true,
        udp: true
    },
    '18506': {
        description: 'Audition Online Dance Battle, Nexon Server',
        port: '18506',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18605': {
        description: 'X-BEAT—Status/Version Check',
        port: '18605',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '18606': {
        description: 'X-BEAT',
        port: '18606',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '19000': [
        {
            description: 'Audition Online Dance Battle, G10/alaplaya Server—Status/Version Check',
            port: '19000',
            status: 'Unofficial',
            tcp: true,
            udp: true
        },
        {
            description: 'JACK sound server',
            port: '19000',
            status: 'Unofficial',
            tcp: false,
            udp: true
        }
    ],
    '19001': {
        description: 'Audition Online Dance Battle, G10/alaplaya Server',
        port: '19001',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '19132': {
        description: 'Standard Minecraft Pocket Edition LAN Server',
        port: '19132',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '19150': {
        description: 'Gkrellm Server',
        port: '19150',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '19226': {
        description: 'Panda Software AdminSecure Communication Agent',
        port: '19226',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '19283': {
        description: 'K2 - KeyAuditor & KeyServer, Sassafras Software Inc. Software Asset Management tools',
        port: '19283',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '19294': {
        description: 'Google Talk Voice and Video connections [113]',
        port: '19294',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '19295': {
        description: 'Google Talk Voice and Video connections [113]',
        port: '19295',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '19302': {
        description: 'Google Talk Voice and Video connections [113]',
        port: '19302',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '19315': {
        description: 'KeyShadow for K2 - KeyAuditor & KeyServer, Sassafras Software Inc. Software Asset Management tools',
        port: '19315',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '19540': {
        description: 'Belkin Network USB Hub[citation needed]',
        port: '19540',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '19638': {
        description: 'Ensim Control Panel[citation needed]',
        port: '19638',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '19812': {
        description: '4D database SQL Communication[citation needed]',
        port: '19812',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '19813': {
        description: '4D database Client Server Communication[citation needed]',
        port: '19813',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '19814': {
        description: '4D database DB4D Communication[citation needed]',
        port: '19814',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '19999': {
        description: 'DNP - Secure (Distributed Network Protocol - Secure), a secure version of the protocol used in SCADA systems between communicating RTU\'s and IED\'s',
        port: '19999',
        status: 'Official',
        tcp: false,
        udp: false
    },
    '20000': [
        {
            description: 'DNP (Distributed Network Protocol), a protocol used in SCADA systems between communicating RTU\'s and IED\'s',
            port: '20000',
            status: 'Official',
            tcp: false,
            udp: false
        },
        {
            description: 'Usermin, Web-based user tool',
            port: '20000',
            status: 'Unofficial',
            tcp: false,
            udp: false
        }
    ],
    '20014': {
        description: 'DART Reporting server[citation needed]',
        port: '20014',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '20560': {
        description: 'Killing Floor',
        port: '20560',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '20702': {
        description: 'Precise TPM Listener Agent',
        port: '20702',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '20720': {
        description: 'Symantec i3 Web GUI server',
        port: '20720',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '20790': {
        description: 'Precise TPM Web GUI server',
        port: '20790',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '21001': {
        description: 'AMLFilter, AMLFilter Inc. amlf-admin default port',
        port: '21001',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '21011': {
        description: 'AMLFilter, AMLFilter Inc. amlf-engine-01 default http port',
        port: '21011',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '21012': {
        description: 'AMLFilter, AMLFilter Inc. amlf-engine-01 default https port',
        port: '21012',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '21021': {
        description: 'AMLFilter, AMLFilter Inc. amlf-engine-02 default http port',
        port: '21021',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '21022': {
        description: 'AMLFilter, AMLFilter Inc. amlf-engine-02 default https port',
        port: '21022',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '22136': {
        description: 'FLIR Systems Camera Resource Protocol',
        port: '22136',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '22222': {
        description: 'Davis Instruments, WeatherLink IP',
        port: '22222',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '22347': {
        description: 'WibuKey, WIBU-SYSTEMS AG Software protection system',
        port: '22347',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '22349': {
        description: 'Wolfson Microelectronics WISCEBridge Debug Protocol[114]',
        port: '22349',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '22350': {
        description: 'CodeMeter, WIBU-SYSTEMS AG Software protection system',
        port: '22350',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '23073': {
        description: 'Soldat Dedicated Server',
        port: '23073',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '23399': {
        description: 'Skype Default Protocol',
        port: '23399',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '23513': {
        description: 'Duke Nukem 3D#Source code Duke Nukem Ports',
        port: '23513',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '24444': {
        description: 'NetBeans integrated development environment',
        port: '24444',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '24465': {
        description: 'Tonido Directory Server for Tonido which is a Personal Web App and P2P platform',
        port: '24465',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '24554': {
        description: 'BINKP, Fidonet mail transfers over TCP/IP',
        port: '24554',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '24800': {
        description: 'Synergy: keyboard/mouse sharing software',
        port: '24800',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '24842': {
        description: 'StepMania: Online: Dance Dance Revolution Simulator',
        port: '24842',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '25000': {
        description: 'Teamware Office standard client connection',
        port: '25000',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '25003': {
        description: 'Teamware Office client notifier',
        port: '25003',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '25005': {
        description: 'Teamware Office message transfer',
        port: '25005',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '25007': {
        description: 'Teamware Office MIME Connector',
        port: '25007',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '25010': {
        description: 'Teamware Office Agent server',
        port: '25010',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '25560': {
        description: 'codeheart.js Relay Server',
        port: '25560',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '25565': [
        {
            description: 'Standard Minecraft (Dedicated) Server',
            port: '25565',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'MySQL Standard MySQL port',
            port: '25565',
            status: 'Unofficial',
            tcp: false,
            udp: false
        }
    ],
    '25570': {
        description: 'Manic Digger default single player port',
        port: '25570',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '25826': {
        description: 'collectd default port[115]',
        port: '25826',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '25888': {
        description: 'Xfire (Firewall Report, UDP_IN) IP Address (206.220.40.146) resolves to gameservertracking.xfire.com. Use unknown.',
        port: '25888',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '25999': {
        description: 'Xfire',
        port: '25999',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '26000': [
        {
            description: 'id Software\'s Quake server',
            port: '26000',
            status: 'Official',
            tcp: false,
            udp: true
        },
        {
            description: 'id Software\'s Quake server',
            port: '26000',
            status: 'Official',
            tcp: true,
            udp: false
        },
        {
            description: 'CCP\'s EVE Online Online gaming MMORPG',
            port: '26000',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '26850': {
        description: 'War of No Return Server Port[citation needed]',
        port: '26850',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '26900': {
        description: 'CCP\'s EVE Online Online gaming MMORPG',
        port: '26900',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '26901': {
        description: 'CCP\'s EVE Online Online gaming MMORPG',
        port: '26901',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '27000': [
        {
            description: 'Steam Client',
            port: '27000-27030',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: '(through 27006) id Software\'s QuakeWorld master server',
            port: '27000',
            status: 'Unofficial',
            tcp: false,
            udp: true
        },
        {
            description: 'FlexNet Publisher\'s License server (from the range of default ports)',
            port: '27000-27009',
            status: 'Unofficial',
            tcp: true,
            udp: false
        }
    ],
    '27010': {
        description: 'Source engine dedicated server port',
        port: '27010',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '27014': [
        {
            description: 'Steam Downloads',
            port: '27014-27050',
            status: 'Unofficial',
            tcp: true,
            udp: false
        },
        {
            description: 'Source engine dedicated server port (rare)',
            port: '27014',
            status: 'Unofficial',
            tcp: false,
            udp: false
        }
    ],
    '27015': {
        description: 'GoldSrc and Source engine dedicated server port',
        port: '27015',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '27016': {
        description: 'Magicka server port',
        port: '27016',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '27017': {
        description: 'mongoDB server port',
        port: '27017',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '27374': {
        description: 'Sub7 default.',
        port: '27374',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '27500': {
        description: 'id Software\'s QuakeWorld',
        port: '27500-27900',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '27888': {
        description: 'Kaillera server',
        port: '27888',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '27900': {
        description: 'Nintendo Wi-Fi Connection',
        port: '27900-27901',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '27901': {
        description: 'id Software\'s Quake II master server',
        port: '27901-27910',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '27950': {
        description: 'OpenArena outgoing',
        port: '27950',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '27960': {
        description: 'Activision\'s Enemy Territory and id Software\'s Quake III Arena, Quake III and Quake Live and some ioquake3 derived games (OpenArena incoming)',
        port: '27960-27969',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '28000': {
        description: 'Bitfighter Common/default Bitfighter Server',
        port: '28000',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '28001': {
        description: 'Starsiege: Tribes Common/default Tribes v.1 Server',
        port: '28001',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '28395': {
        description: 'www.SmartSystemsLLC.com Used by Smart Sale 5.0[citation needed]',
        port: '28395',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '28785': {
        description: 'Cube 2 Sauerbraten[116]',
        port: '28785',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '28786': {
        description: 'Cube 2 Sauerbraten Port 2[116]',
        port: '28786',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '28801': {
        description: 'Red Eclipse (Cube 2 derivative) default ports [117]',
        port: '28801 - 28802',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '28852': {
        description: 'Killing Floor',
        port: '28852',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '28910': {
        description: 'Nintendo Wi-Fi Connection[118]',
        port: '28910',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '28960': {
        description: 'Call of Duty; Call of Duty: United Offensive; Call of Duty 2; Call of Duty 4: Modern Warfare; Call of Duty: World at War (PC Version)',
        port: '28960',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '29000': {
        description: 'Perfect World International Used by the Perfect World International Client',
        port: '29000',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '29070': {
        description: 'Game titled "Jedi Knight: Jedi Academy" by Ravensoft',
        port: '29070',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '29292': {
        description: 'TMO Integration Service Communications Port, Used by Transaction Manager SaaS (HighJump Software)[citation needed]',
        port: '29292',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '29900': {
        description: 'Nintendo Wi-Fi Connection[118]',
        port: '29900-29901',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '29920': {
        description: 'Nintendo Wi-Fi Connection[118]',
        port: '29920',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '30000': {
        description: 'Pokémon Netbattle',
        port: '30000',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '30301': {
        description: 'BitTorrent',
        port: '30301',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '30564': {
        description: 'Multiplicity: keyboard/mouse/clipboard sharing software',
        port: '30564',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '30718': {
        description: 'Lantronix Discovery for Lantronix serial-to-ethernet devices',
        port: '30718',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '30777': {
        description: 'ZangZing agent',
        port: '30777',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '31314': {
        description: 'electric imp node<>server communication (TLS)',
        port: '31314',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '31337': {
        description: 'Back Orifice—remote administration tool (often Trojan horse)',
        port: '31337',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '31415': {
        description: 'ThoughtSignal—Server Communication Service (often Informational)',
        port: '31415',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '31456': {
        description: 'TetriNET IRC gateway on some servers',
        port: '31456',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '31457': {
        description: 'TetriNET',
        port: '31457',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '31458': {
        description: 'TetriNET Used for game spectators',
        port: '31458',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '31620': {
        description: 'LM-MON (Standard Floating License Manager LM-MON)',
        port: '31620',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '32123': {
        description: 'x3Lobby Used by x3Lobby, an internet application.',
        port: '32123',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '32137': {
        description: 'Immunet Protect (UDP in version 2.0,[119] TCP since version 3.0[120])',
        port: '32137',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '32245': {
        description: 'MMTSG-mutualed over MMT (encrypted transmission)',
        port: '32245',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '32769': {
        description: 'FileNet RPC',
        port: '32769',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '32887': {
        description: 'Used by "Ace of Spades" game',
        port: '32887',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '32976': {
        description: 'LogMeIn Hamachi (VPN tunnel software; also port 12975)—used to connect to Mediation Server (bibi.hamachi.cc); will attempt to use SSL (TCP port 443) if both 12975 & 32976 fail to connect',
        port: '32976',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '33434': {
        description: 'traceroute',
        port: '33434',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '33982': {
        description: 'Dezta software',
        port: '33982',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '34000': {
        description: 'MasterPort - WarZ',
        port: '34000',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '34001': {
        description: 'ClientPort - WarZ',
        port: '34001',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '34010': {
        description: 'PortStart - WarZ',
        port: '34010',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '34443': {
        description: 'Linksys PSUS4 print server[citation needed]',
        port: '34443',
        status: 'Unofficial',
        tcp: false,
        udp: false
    },
    '34567': {
        description: 'EDI service[121]',
        port: '34567',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '36330': {
        description: 'Folding@home v7 default for client control interface',
        port: '36330',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '36963': {
        description: 'Any of the USGN online games, most notably Counter Strike 2D multiplayer (2D clone of popular CounterStrike computer game)',
        port: '36963',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '37659': {
        description: 'Axence nVision[citation needed]',
        port: '37659',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '37777': {
        description: 'Digital Video Recorder hardware[citation needed]',
        port: '37777',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '40000': {
        description: 'SafetyNET p Real-time Industrial Ethernet protocol',
        port: '40000',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '40123': {
        description: 'Flatcast[122]',
        port: '40123',
        status: 'Unofficial',
        tcp: false,
        udp: true
    },
    '41823': {
        description: 'Murealm Client[citation needed]',
        port: '41823',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '43034': {
        description: 'LarmX.com™ database update mtr port[citation needed]',
        port: '43034',
        status: 'Unofficial',
        tcp: true,
        udp: true
    },
    '43047': {
        description: 'TheòsMessenger second port for service TheòsMessenger[citation needed]',
        port: '43047',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '43048': {
        description: 'TheòsMessenger third port for service TheòsMessenger[citation needed]',
        port: '43048',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '43594': {
        description: 'RuneScape, FunOrb, Runescape Private Servers game servers',
        port: '43594',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '43595': {
        description: 'RuneScape JAGGRAB servers',
        port: '43595',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '44405': {
        description: 'Mu Online Connect Server',
        port: '44405',
        status: 'Unofficial',
        tcp: true,
        udp: false
    },
    '45824': {
        description: 'Server for the DAI family of client-server products[citation needed]',
        port: '45824',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '47001': {
        description: 'WinRM - Windows Remote Management Service [123]',
        port: '47001',
        status: 'Official',
        tcp: true,
        udp: false
    },
    '47808': {
        description: 'BACnet Building Automation and Control Networks (4780810 = BAC016)',
        port: '47808',
        status: 'Official',
        tcp: true,
        udp: true
    },
    '49151': {
        description: 'Reserved[1]',
        port: '49151',
        status: 'Official',
        tcp: true,
        udp: true
    }
}