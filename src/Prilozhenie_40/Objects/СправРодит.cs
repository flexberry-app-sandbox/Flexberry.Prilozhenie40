﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_40
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// СправРодит.
    /// </summary>
    // *** Start programmer edit section *** (СправРодит CustomAttributes)

    // *** End programmer edit section *** (СправРодит CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СправРодитE", new string[] {
            "Фио as \'Фио Родителя\'"})]
    [View("СправРодитL", new string[] {
            "Фио as \'Фио Родителя\'"})]
    public class СправРодит : ICSSoft.STORMNET.DataObject
    {
        
        private string fФио;
        
        // *** Start programmer edit section *** (СправРодит CustomMembers)

        // *** End programmer edit section *** (СправРодит CustomMembers)

        
        /// <summary>
        /// Фио.
        /// </summary>
        // *** Start programmer edit section *** (СправРодит.Фио CustomAttributes)

        // *** End programmer edit section *** (СправРодит.Фио CustomAttributes)
        [StrLen(255)]
        public virtual string Фио
        {
            get
            {
                // *** Start programmer edit section *** (СправРодит.Фио Get start)

                // *** End programmer edit section *** (СправРодит.Фио Get start)
                string result = this.fФио;
                // *** Start programmer edit section *** (СправРодит.Фио Get end)

                // *** End programmer edit section *** (СправРодит.Фио Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправРодит.Фио Set start)

                // *** End programmer edit section *** (СправРодит.Фио Set start)
                this.fФио = value;
                // *** Start programmer edit section *** (СправРодит.Фио Set end)

                // *** End programmer edit section *** (СправРодит.Фио Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СправРодитE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправРодитE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправРодитE", typeof(IIS.Prilozhenie_40.СправРодит));
                }
            }
            
            /// <summary>
            /// "СправРодитL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправРодитL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправРодитL", typeof(IIS.Prilozhenie_40.СправРодит));
                }
            }
        }
    }
}
